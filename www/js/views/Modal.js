class ModalView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    let confirm = '', title = '', content = '', btn = '';
    if(model.title) {
      title = `<h4>${model.title}</h4>`;
    }
    if(model.form) {
      content = `
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <input id="plate" type="text" class="validate" required>
                <label for="plate">Placa</label>
              </div>

              <div class="input-field col s12">
                <input id="model" type="text" class="validate" required>
                <label for="model">Modelo</label>
              </div>

              <div class="input-field col s12">
                <input id="year" type="number" class="validate" required>
                <label for="year">Ano</label>
              </div>
            </div>
          </form>
        </div>
      `;
    }else if(model.message) {
      content = `<p>${model.message}</p>`;
    }else if(model.vacancy) {
      let collection = '';
      for(let i = 0; i < model.vacancy.length; i++) {
        collection += `
          <tr>
            <td>${i}</td>
            <td>${model.vacancy[i].plate}</td>
            <td>${model.vacancy[i].model}</td>
            <td>${model.vacancy[i].year}</td>
          </tr>
        `
      }
      content = `
        <table class="striped">
          <thead>
            <tr>
              <th>Posicao</th>
              <th>Placa</th>
              <th>Modelo</th>
              <th>Ano</th>
            </tr>
          </thead>

          <tbody>
            ${collection}
          </tbody>
        </table>
      `
    }else if(model.car) {
      content = `
        <table class="striped">
          <tbody>
            <tr>
              <td>Vaga</td>
              <td>${model.car.i}</td>
            </tr>
            <tr>
              <td>Posicao</td>
              <td>${model.car.j}</td>
            </tr>
            <tr>
              <td>Placa</td>
              <td>${model.car.plate}</td>
            </tr>
            <tr>
              <td>Modelo</td>
              <td>${model.car.model}</td>
            </tr>
            <tr>
              <td>Ano</td>
              <td>${model.car.year}</td>
            </tr>
          </tbody>
        </table>
      `;
    }

    if(model.btn && main.modal.callback) {
      btn = `
        <a onclick="main.modal.callback()" class="modal-action modal-close waves-effect waves-green btn-flat">
          ${model.btn.name}
        </a>
      `;
    }
    confirm = `
      <div class="modal-footer">
        ${btn}
        <a onclick="main.modal.close()" class="modal-action modal-close waves-effect waves-green btn-flat">
          Fechar
        </a>
      </div>
    `;
    return `
      <div class="modal-content">
        ${title}
        ${content}
      </div>
      ${confirm}
    `;
  }
}

module.exports = ModalView;
