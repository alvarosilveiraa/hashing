const fs = require("fs")
  , path = require("path")
  , cs = path.join(__dirname, "../../cs")
  , program = fs.readFileSync(path.join(cs, "Program.cs"), 'utf8')
  , hash = fs.readFileSync(path.join(cs, "Hash.cs"), 'utf8')
  , car = fs.readFileSync(path.join(cs, "Car.cs"), 'utf8')
  , storage = fs.readFileSync(path.join(cs, "Storage.cs"), 'utf8');

class CodeView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    return `
      <div class="modal modal-fixed-footer"></div>
      <header class="navbar-fixed">
        ${model.navbar.template({name: "home"})}
      </header>
      <div>
        <ul class="tabs" style="overflow: hidden;">
          <li class="tab col s3">
            <a href="#program">Program.cs</a>
          </li>
          <li class="tab col s3">
            <a href="#hash">Hash.cs</a>
          </li>
          <li class="tab col s3">
            <a href="#car">Car.cs</a></li>
          <li class="tab col s3">
            <a href="#storage">Storage.cs</a>
          </li>
        </ul>
      </div>
      <main style="height: calc(100vh - 115px) !important;">
          <div id="program" class="col s12">
            <pre><code class="language-csharp">${program}</code></pre>
          </div>

          <div id="hash" class="col s12">
            <pre><code class="language-csharp">${hash}</code></pre>
          </div>

          <div id="car" class="col s12">
            <pre><code class="language-csharp">${car}</code></pre>
          </div>

          <div id="storage" class="col s12">
            <pre><code class="language-csharp">${storage}</code></pre>
          </div>
      </main>
    `;
  }
}

module.exports = CodeView;
