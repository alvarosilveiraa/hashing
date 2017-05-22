class HomeView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    return `
      <div class="modal modal-fixed-footer"></div>
      <header class="navbar-fixed">
        ${model.navbar.template({name: "code"})}
      </header>
      <main class="row collection" style="height: calc(100vh - 75px) !important;">
        ${this._setStorage(model.storage)}
      </main>
    `;
  }

  _setStorage(storage) {
    let items = '';
    for(let i = 0; i < 100; i++) {
      let cars = '<i class="material-icons">do_not_disturb</i>', disabled = {text: "disabled", color: "grey-text"};
      if(storage && storage[i]) {
        disabled = {text: '', color: "blue-grey-text"};
        if(storage[i].length > 5) {
          cars = `
            <i class="material-icons">directions_car</i>
            <i class="material-icons">directions_car</i>
            <i class="material-icons">directions_car</i>
            <i class="material-icons">directions_car</i>
            <i class="material-icons">more_horiz</i>
          `;
        }else if(storage[i].length > 0) {
          let car = '';
          for(let j = 0; j < storage[i].length; j++) {
            car += `
              <i class="material-icons">directions_car</i>
            `;
          }
          cars = `
            ${car}
          `;
        }
      }
      items += `
        <div class="col s4">
          <a href="#" onclick="main.home.vacancy(${i})" class="${disabled.color} collection-item" ${disabled.text}>
            ${cars}
            <span class="badge">${i}</span>
          </a>
        </div>
      `;
    }
    return items;
  }
}

module.exports = HomeView;
