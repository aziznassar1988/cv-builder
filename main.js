const addpro = document.querySelector(".addpro");

const container = document.querySelector(".sec");

const buy = document.querySelectorAll(".buy");

addpro.addEventListener("click", (eo) => {
  container.innerHTML += `<div class="card mycard" id="card" style="width: 18rem">
      <img src="./me-28dd1fbca7dfd2d37a8358163c6f9677.png"
            class="card-img-top"
            alt="..."/>
      <div id="cardb" class="card-body">
        <h5 id="cardtit" class="card-title">Card title</h5>
        <p id="cardp" class="card-text">
          Some quick example text to build on the card title and make up
          the bulk of the card’s content.
        </p>
        <button id="buy" class="btn btn-primary buy">buy</button>
    </div>`;
});

container.addEventListener("click", (eo) => {
  const mes = document.querySelector(".mes");
  const dia = document.querySelector(".dia");
  if (eo.target.className == "btn btn-primary buy") {
    container.innerHTML += `<dialog id="dia" class="dia">
            <p id="visanum">Enter Your visa number</p>
            <input type="number" id="visa" /><br />
            <button id="visanumber" class="visanumber">Submit</button>
          </dialog>`;
    const dia = document.querySelector(".dia");
    dia.showModal();
  }
  if (eo.target.className == "visanumber") {
    dia.close();
    container.innerHTML += `<dialog id="mes" class="mes">
            <p id="visap">Your Visa Not Corrected</p>
            <button id="surebutton" class="surebutton">Submit</button>
          </dialog>`;
    const mes = document.querySelector(".mes");
    mes.showModal();
  }
    if (eo.target.className == "surebutton") {
          mes.close();
  }
});
