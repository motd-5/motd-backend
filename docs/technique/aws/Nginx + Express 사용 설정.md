[< 뒤로가기](../README.md)

## Nginx + Express 사용 설정

-   작성자 : @unchaptered
-   작성일자 : `2022-08-18`

https://velog.io/@unchapterd/%EA%B5%AC%ED%98%84-Reverse-Proxy-Server

## 1단계 : AWS 설정

### 보안 그룹 생성 : 이름 가제 [project-security-group]

-   SSH 22 Anywhere IPv4
-   HTTP 80 Anywhere IPv4
-   사용자 정의 TCP/IP 3000 Anywhere IPv4

### EC2 인스턴스 생성 : 이름 가제 [project-server]

1. 보안그룹 선택 : project-security-group
2. SSH 발급 및 저장
3. \*.pem 키 권한 설정 [참고글](https://github.com/unchaptered/hanghae-backend-1/issues/5)

### Node 설치 및 기본설정

```cmd
curl -s https://deb.nodesource.com/setup_16.x | sudo bash
sudo apt update
sudo apt install nodejs

sudo node -v
sudo npm -v
sudo git -v


sudo npm install pm2 -g
sudo npm ls -g


sudo git clone -b submain https://github.com/motd-5/motd-backend project
ls
cd /home/ubuntu/project
sudo npm ci

cd /home/ubuntu/project/src/sequelize
sudo mkdir seeders
sudo mkdir config

cd /home/ubuntu/project/src/sequelize/config
sudo nano config.json
```

```json
{
    "development": {
        "username": "root",
        "password": "RDS-비밀번호",
        "database": "RDS-DB-이름",
        "host": "RDS-주소값",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": "RDS-비밀번호",
        "database": "database_test",
        "host": "RDS-주소값",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": "RDS-비밀번호",
        "database": "database_production",
        "host": "RDS-주소값",
        "dialect": "mysql"
    }
}
```

-- Ctrl + O > Enter : 저장 -- Ctrl + X : 저장이 완료되었을 때는 바로 나와지고, 그렇지 않을 때는 아래 읽어보면 됨...

cat config.js

### RDS 설정

RDS 의 보안그룹을 [project-secrutiy-group] 으로 선택해주세요.

### Npx Sequelize 실행

```cmd
cd /home/ubuntu/project/src/sequelize
npx sequelize db:create
npx seqeulize db:migrate
cd /home/ubuntu/project
npm run dev
pm2 start ./src/index.js
```

## 2단계 : Nginx

```cmd
sudo apt install nginx
cd /etc/nginx/sites-enabled
sudo nano 도메인-주소
```

```default
server {

	 listen 80;
   	 listen [::]:80;

	location / {
    		proxy_pass http://127.0.0.1:3000;
  	}

}
```

```cmd
cd /etc/nginx
sudo nano nginx.conf
```

1. `# server_names_hash_bucket_size 64;` 구문을 찾아서 `#` 주석 표시용 문구를 지워주세요
2. `include /etc/nginx/sites-enabled/*;` 구문을 찾아서 `include /etc/nginx/sites-enabled/도메인-주소;` 로 변경해주세요.
