"use strict";

const View = require("./js/views/View")
  , LoaderView = require("./js/views/Loader")
  , ModalView = require("./js/views/Modal")
  , NavbarView = require("./js/views/Navbar")
  , HomeView = require("./js/views/Home")
  , CodeView = require("./js/views/Code")
  , StorageModel = require("./js/models/Storage")
  , Controller = require("./js/controllers/Controller")
  , ModalController = require("./js/controllers/Modal")
  , HomeController = require("./js/controllers/Home")
  , CodeController = require("./js/controllers/Code");

class Main {
  constructor() {
    this.modal = new ModalController();
    this.home = new HomeController();
    this.code = new CodeController();
  }
}

let main = new Main();
main.home.render();
