class ModalView extends View {
  constructor(element) {
    super(element);
  }

  // title
  // text
  // alert
  // form
  // footer
  template(model) {
    let confirm = '';
    if(main.modal.callback) {
      confirm = `
        <a onclick="main.modal.callback()" class="modal-action modal-close waves-effect waves-green btn-flat">
          Agree
        </a>
      `;
    }
    return `
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>${model}</p>
      </div>
      <div class="modal-footer">
        ${confirm}
      </div>
    `;
  }
}

module.exports = ModalView;
