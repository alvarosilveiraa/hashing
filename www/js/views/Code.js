const fs = require("fs")
  , path = require("path")
  , cs = path.join(__dirname, "../../cs")
  , db = path.join(__dirname, "../../db");

class CodeView extends View {
  constructor(element) {
    super(element);
    this._program = fs.readFileSync(path.join(cs, "Program.cs"), 'utf8')
    this._hash = fs.readFileSync(path.join(cs, "Hash.cs"), 'utf8')
    this._vehicle = fs.readFileSync(path.join(cs, "Vehicle.cs"), 'utf8')
    this._storage = fs.readFileSync(path.join(cs, "Storage.cs"), 'utf8')
  }

  template(model) {
    let database = fs.readFileSync(path.join(db, "storage.txt"), 'utf8');
    return `
      <div class="modal modal-fixed-footer"></div>
      <header class="navbar-fixed">
        ${model.navbar.template({name: "home"})}
      </header>
      <main>
        <div>
          <ul class="tabs" style="overflow: hidden;">
            <li class="tab col s3">
              <a href="#program">Program.cs</a>
            </li>
            <li class="tab col s3">
              <a href="#hash">Hash.cs</a>
            </li>
            <li class="tab col s3">
              <a href="#vehicle">Vehicle.cs</a></li>
            <li class="tab col s3">
              <a href="#storage">Storage.cs</a>
            </li>
            <li class="tab col s3">
              <a href="#database">storage.txt</a>
            </li>
          </ul>
        </div>
        <div id="program" class="col s12">
          <pre><code class="language-csharp">${this._program}</code></pre>
        </div>

        <div id="hash" class="col s12">
          <pre><code class="language-csharp">${this._hash}</code></pre>
        </div>

        <div id="vehicle" class="col s12">
          <pre><code class="language-csharp">${this._vehicle}</code></pre>
        </div>

        <div id="storage" class="col s12">
          <pre><code class="language-csharp">${this._storage}</code></pre>
        </div>

        <div id="database" class="col s12">
          <pre><code class="language-">${database}</code></pre>
        </div>
      </main>
    `;
  }
}

module.exports = CodeView;
