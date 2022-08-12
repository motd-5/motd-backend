import Express from "express";

export default class App {
  static app;

  constructor() {}

  static getAppInstance(MODE, PORT) {
    if (this.app) return this.app;

    this.app = Express();

    this.app.listen(PORT, () => {
      if (MODE !== "test") console.log(`Server is running on ${MODE}`);
    });

    return this.app;
  }
}
