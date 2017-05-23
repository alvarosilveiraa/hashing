class NavbarView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    return `
      <nav class="blue-grey lighten-1">
        <div class="nav-wrapper">
          <ul class="right">
            <li>
              <a onclick="main.home.insert()">
                <i class="material-icons">add</i>
              </a>
            </li>
            <li>
              <a onclick="main.${model.name}.render()">
                <i class="material-icons">${model.name}</i>
              </a>
            </li>
          </ul>
          <form onsubmit="main.home.search(event)" style="width: 50%;">
            <div class="input-field">
              <input type="search" name="search" placeholder="Pesquisar placa" required>
              <label class="label-icon" for="search">
                <i class="material-icons">search</i>
              </label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    `;
  }
}

module.exports = NavbarView;
