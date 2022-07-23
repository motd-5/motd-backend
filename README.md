# Welcome 🎉 Base-Express

This is `First Step` of [Basic Course](https://github.com/Boiler-Express/.github/blob/main/profile/BASIC-COURSE.md) to dev Express App.

This Template only contain **Basic Application**.

If you want to more information of Architecture, visit [Architecture.md](https://github.com/Boiler-Express/Base-Express/blob/main/ARCHITECTURE.md)

<img src="./ARCHITECTURE.png" style="width: 500px;">


<hr>

## Get Started, lastest version

```cmd
git clone https://github.com/Boiler-Express/Base-Express.git
npx degit Boiler-Express/Base-Express
```

- `git clone` : copy all files, include all versions.
- `npx degit` : copy all files, except versions.

<hr>

## Get Start, selected version

```cmd
<!-- If, you want to clone @1.0.0 / @1.1.0 version -->

git clone -b '@1.0.0' --single-branch https://github.com/Boiler-Express/Base-Express.git

git clone -b '@1.1.0' --single-branch https://github.com/Boiler-Express/Base-Express.git
```

| Versions  | Description   | Updated Date |
| :-------: | :-----------  | :----------- |
| @1.0.0    | This version contains... <br> - Base Strcutrue of Singleton Express | `2022-07-22` |
| @1.1.0    | This version contains... <br> - Base Structure of Singleton Express <br> - Base Config Settings of Testing, `Jest` | `2022-07-22` |
| @1.2.0    | This version contains... <br> - Base Structure of Singleton Express <br> - Base Config Settings of Testing, `Jest` <br> - 100% coverage testing code, for eaxmples | `2022-07-22` (latest) |


<hr>

## Modules

```json
  "dependencies": {
    "dotenv": "^16.0.1",
    "express": "^4.18.1"
  },
  "devDependencies": {
    "@babel/core": "^7.18.9",     // for testing, with es6.
    "@types/jest": "^28.1.6",     // for testing, with es6.
    "jest": "^28.1.3",            // for testing, with es6.
    "cross-env": "^7.0.3",
    "nodemon": "^2.0.19"
  }
```