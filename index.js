"use strict";

const electron = require("electron")
  , path = require("path")
  , url = require("url");

class Main {
  constructor() {
    this._window = null;
  }

  create() {
    let app = electron.app;
    app.on("ready", this._setWindow);
    app.on("window-all-closed", () => {
      if(process.platform !== "darwin") app.quit();
    })
    app.on("activate", function() {
      if(main === null) this._setWindow();
    })
  }

  _setWindow() {
    this._window = new electron.BrowserWindow({
      title: "Hashing - Depósito de veículos",
      width: 800,
      height: 600,
      show: false,
      frame: true,
      resizable: true,
      icon: path.join(__dirname, "./www/assets/img/favicon.ico")
    })
    this._window.webContents.once("dom-ready", () => {
      this._window.show();
    })
    this._window.loadURL(url.format({
      pathname: path.join(__dirname, "./www/index.html"),
      protocol: "file:",
      slashes: true
    }))
    this._window.on("closed", () => {
      this._window = null;
    })
  }
}

let main = new Main();
main.create();
