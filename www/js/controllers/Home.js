class HomeController extends Controller {
  constructor() {
    super();
    this._navbarView = new NavbarView();
    this._homeView = new HomeView($("#view"));
    this._storageModel = new StorageModel();
  }

  render() {
    this._homeView.update({
      navbar: this._navbarView,
      storage: [[0,1,2,3,5,6],[0],,[0,1]]
    })
  }

  search(e) {
    e.preventDefault();
    let input = e.target[0];
    main.modal.render($(".modal"), input.value);
    input.value = '';
  }

  add() {
    main.modal.render($(".modal"), '+', () => {
      alert("eoq");
    });
  }

  vacancy(index) {
    main.modal.render($(".modal"), index);
  }
}

module.exports = HomeController;
