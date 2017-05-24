class HomeController extends Controller {
  constructor() {
    super();
    this._storage = [];
    this._navbarView = new NavbarView();
    this._loaderView = new LoaderView($("#view"));
    this._homeView = new HomeView($("#view"));
    this._storageModel = new StorageModel();
  }

  render() {
    if(this._storage.length == 0) {
      this._loaderView.update();
      this._storageModel.getAll()
        .then(data => {
          this._storage = data;
          this._homeView.update({
            navbar: this._navbarView,
            storage: this._storage
          })
        })
        .catch(err => {
          alert(err.toString());
        })
    }else {
      this._homeView.update({
        navbar: this._navbarView,
        storage: this._storage
      })
    }
  }

  search(e) {
    e.preventDefault();
    let input = e.target[0];
    if(this._fixPlate(input.value)) {
      input.value = this._fixPlate(input.value);
      this._storageModel.getOne(input.value)
        .then(data => {
          let model = {};
          model.title = "Pesquisa da placa";
          data? model.car = data: model.message = `(${input.value}) Placa não encontrada`;
          main.modal.render($(".modal"), model);
          input.value = '';
        })
        .catch(err => {
          alert(err.toString());
        })
    }else {
      alert("Placa inválida!");
      input.value = '';
    }
  }

  insert() {
    main.modal.render($(".modal"), {
      form: true,
      btn: {
        name: "Inserir"
      }
    }, this._onInsert.bind(this))
  }

  vacancy(index) {
    main.modal.render($(".modal"), {
      title: `${this._storage[index].length} veiculo${this._storage[index].length > 1? 's': ''} (vaga ${index})`,
      vacancy: this._storage[index]
    })
  }

  _onInsert() {
    let form = {}
    form.plate = $("#plate").val();
    form.model = $("#model").val();
    form.year = $("#year").val();

    try {
      this._validVehicle(form);
      this._storageModel.insert(form)
        .then(data => {
          if(!this._storage[data])
            this._storage[data] = [];
          this._storage[data].push(form);
          alert(`Veiculo inserido na vaga: ${data}`);
          this.render();
        })
        .catch(err => {
          alert(err.toString());
        })
    }catch(e) {
      alert(e);
    }
  }

  _validVehicle(form) {
    let message = '';

    if(!form.plate)
      message += "\n(Placa) Campo obrigatorio";
    if(!form.model)
      message += "\n(Modelo) Campo obrigatorio";
    if(!form.year)
      message += "\n(Ano) Campo obrigatorio";

    if(message != '')
      throw new Error(message);

    form.plate = this._fixPlate(form.plate);
    let today = new Date();
    if(!form.plate)
      message += "\n(Placa) Campo invalido";
    if(
      !/^\d{4}$/.test(form.year) ||
      (
        form.year < 1900 ||
        form.year > today.getFullYear() + 1
      )
    )
      message += "\n(Ano) Campo invalido";

    if(message != '')
      throw new Error(message);
  }

  _fixPlate(plate) {
    if(/^[a-zA-Z]{3}[ \-\_]?\d{4}$/i.test(plate)) {
      plate = plate.replace(/[ \-\_]/, '').toUpperCase();
      plate = plate.slice(0, 3) + '-' + plate.slice(-4);
      return plate;
    }else {
      return null;
    }
  }
}

module.exports = HomeController;
