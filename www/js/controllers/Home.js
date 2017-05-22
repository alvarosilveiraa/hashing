class HomeController extends Controller {
  constructor() {
    super();
    this._storage = [];
    this._navbarView = new NavbarView();
    this._homeView = new HomeView($("#view"));
    this._storageModel = new StorageModel();
  }

  render() {
    this._storageModel.readDatabase((err, storage) => {
      if(err)
        alert(err.toString());
      else
        this._storage = storage;

      this._homeView.update({
        navbar: this._navbarView,
        storage: this._storage
      })
    })
  }

  search(e) {
    e.preventDefault();
    let input = e.target[0];
    if(this._fixPlate(input.value)) {
      input.value = this._fixPlate(input.value);
      this._storageModel.getOne(input.value)
        .then(data => {
          main.modal.render($(".modal"), {
            title: "Pesquisa da placa",
            car: data
          })
          input.value = '';
        })
        .catch(err => {
          alert(err.toString());
        })
    }else {
      alert("Placa invalida!");
      input.value = '';
    }
  }

  add() {
    main.modal.render($(".modal"), {
      form: true,
      btn: {
        name: "Inserir"
      }
    }, () => {
      let form = {
        plate: $("#plate").val(),
        model: $("#model").val(),
        year: $("#year").val()
      }

      if(!form.plate || !form.model || !form.year) {
        alert("Preencha todos os campos!");
      }else {
        if(this._fixPlate(form.plate)) {
          form.plate = this._fixPlate(form.plate);
          this._storageModel.insert(form)
            .then(data => {
              console.log(form);
              console.log(data);
            })
            .catch(err => {
              alert(err.toString());
            })
        }else {
          alert("Placa invalida!");
        }
      }
    })
    $("#plate").focus();
  }

  vacancy(index) {
    main.modal.render($(".modal"), {
      title: `${this._storage[index].length} veiculo${this._storage[index].length > 1? 's': ''} (vaga ${index})`,
      vacancy: this._storage[index]
    })
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
