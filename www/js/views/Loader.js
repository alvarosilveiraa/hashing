class LoaderView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    return `
      <div style="position: absolute; top: 50%; left: 50%; margin-top: -25px; margin-left: -25px;">
        <div class="preloader-wrapper active">
          <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div><div class="gap-patch">
              <div class="circle"></div>
            </div><div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

module.exports = LoaderView;
