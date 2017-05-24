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

  openStorageTxt() {
    this._storageModel.openDatabase();
  }
}

module.exports = CodeController;
