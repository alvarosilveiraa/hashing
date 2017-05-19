"use strict";


let $ = document.querySelector.bind(document)
  , storage = $("#storage")
  , button = $("header button")
  , home = $("#home")
  , code = $("#code");

button.addEventListener("click", function() {

  if(code.style.display == "none") {
    home.style.display = "none";
    code.style.display = "block";
    button.querySelector("i").textContent = "home";
  }else {
    home.style.display = "block";
    code.style.display = "none";
    button.querySelector("i").textContent = "code";
  }
})


for(let i = 0; i < 100; i++) {
  let item = document.createElement("div");
  item.innerHTML = `
    <div class="col-20 padding">

      <div class="item">
        <span class="badge">${i}</span>

        <div class="cars">

          <div class="car">
            <i class="material-icons">directions_car</i>
          </div>

          <div class="car">
            <i class="material-icons">directions_car</i>
          </div>

          <div class="car">
            <i class="material-icons">more_horiz</i>
          </div>

        </div>

      </div>

    </div>
  `;

  storage.appendChild(item);
}
