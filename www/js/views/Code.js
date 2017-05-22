class CodeView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    return `
      <div class="modal"></div>
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
<pre><code class="language-csharp">class Program {
  private string teste;
  public Hash() {
    this.teste = "Hash";
  }
}</code></pre>
          </div>

          <div id="hash" class="col s12">
<pre><code class="language-csharp">class Hash {
  private string teste;
  public Hash() {
    this.teste = "Hash";
  }
}</code></pre>
          </div>

          <div id="car" class="col s12">
<pre><code class="language-csharp">class Car {
  private string teste;
  public Car() {
    this.teste = "A";
  }
}</code></pre>
          </div>

          <div id="storage" class="col s12">
<pre><code class="language-csharp">class Storage {
  private string teste;
  public Storage() {
    this.teste = "B";
  }
}</code></pre>
          </div>
      </main>
    `;
  }
}

module.exports = CodeView;
