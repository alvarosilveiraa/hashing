class ModalController extends Controller {
  constructor() {
    super();
    this._modal = null;
    this._modalView = null;
    this.callback = null;
  }

  render(element, model, callback) {
    if(typeof callback === "function")
      this.callback = callback;
    this._modal = element;
    this._modalView = new ModalView(element);
    this._modalView.update(model);
    this._modal.modal({complete: this.close.bind(this)});
    this._modal.modal("open");
  }

  close() {
    this._modal = null;
    this._modalView = null;
    this.callback = null;
  }
}

module.exports = ModalController;
