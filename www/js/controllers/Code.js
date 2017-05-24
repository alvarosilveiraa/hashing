class CodeController extends Controller {
  constructor() {
    super();
    this._navbarView = new NavbarView();
    this._codeView = new CodeView($("#view"));
    this._storageModel = new StorageModel();
  }

  render() {
    this._codeView.update({navbar: this._navbarView});
    Prism.highlightAll();
    $('ul.tabs').tabs();
  }

  tab(e, name) {
    $("button.active").classList.remove("active");
    (e.currentTarget).classList.add("active");
    $all("pre").forEach(element => {
      element.style.display = "none";
    })
    $(`#${name}`).style.display = "block";
  }

  openStorageTxt() {
    this._storageModel.openDatabase();
  }
}

module.exports = CodeController;
