// to make list items inside ul
/* const skillsec = document.querySelector(".skill");
const ul= document.createElement("ul");

function listItem(text){
    let li = document.createElement("li");
    let textli = document.createTextNode(text);
    skillsec.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(textli);
}
listItem("Sex") */

//* Humburger Menu
/* let menuShow = document.querySelector(".fa-bars");
let menuClose = document.querySelector(".fa-xmark");
let navbar = document.querySelector(".nav");
let humburgerMenu = document.querySelector(".hum");
function toggleActive() {
  menuShow.classList.toggle("active");
  menuClose.classList.toggle("active");
  navbar.classList.toggle("active");
}
humburgerMenu.addEventListener("click", toggleActive); */

const subButton = document.getElementById("sub");
const formSubmit = document.querySelector("form");

//* Function to Add new Input
let plusButton = document.querySelector(".splus");
let langButton = document.querySelector(".langplus");
let hobButton = document.querySelector(".hobplus");

// 1. Get the container and the existing input.
let skillbar = document.querySelector(".skillbar");
let inputskill = document.querySelector(".inputskill");
// 2. define array variable to store the data from inputs field in skills section
let skillArr = [];
function addItem() {
  let inputvalue = inputskill.value;
// 3.Store the current value of the existing input in a variable.
  if (inputvalue !== "") {
    // Only add if the input is not empty
    skillArr.push(inputvalue); // Add the new item to the array
  } else {
    alert(
      "Your Input is Empty First Fill Input after that Press + Button to open new Input"
    );
  }
  console.log(skillArr);
}
if (plusButton) {
  plusButton.addEventListener("click", (e) => {
    e.preventDefault();
      addItem();
// 4.create new input element after check if current input have a value
    if (inputskill.value) {
      let newInput = document.createElement("input");
      newInput.type = "text";
      newInput.name = "skills";
      newInput.placeholder = "Enter other Skill";
      newInput.style.width = "80vw";
      newInput.classList.add("inputskill");
// 5. Append the new input to the container.
      skillbar.appendChild(document.createElement("br")); // Add a line break for spacing
      skillbar.appendChild(newInput);
    }
  });
}
/* // for add new Input in Language Section
function langInput() {
  // 1. Get the container and the existing input.
  let langBar = document.querySelector(".langbar");
  let langInput = document.querySelector(".inputlang");
  // 2. Store the current value of the existing input in a variable.
  let saveLang = langInput.value;
  // 3. Create a new input element.
  let newLang = document.createElement("input");
  newLang.type = "text";
  newLang.placeholder = "Enter Another language";
  newLang.style.width = "80vw";
  newLang.classList.add("inputskill");
  // 4. Append the new input to the container.
  langBar.appendChild(document.createElement("br"));
  langBar.appendChild(newLang);
  // 5. Restore the saved value to the original input.
  langInput.value = saveLang;
  console.log(langBar);
}
langButton.addEventListener("click", langInput);

// for add new Input in Hobbies Section
function hobbiesInput() {
  // 1. Get the container and the existing input.
  let hobby = document.querySelector(".hobbeyBar");
  let inputHobby = document.querySelector(".inputhobb");

  // 2. Store the current value of the existing input in a variable.
  let saveHobby = inputHobby.value;

  // 3. Create a new input element.
  let newInput = document.createElement("input");
  newInput.type = "text";
  newInput.placeholder = "Enter other Hobby";
  newInput.style.width = "80vw";
  newInput.classList.add("inputskill");

  // 4. Append the new input to the container.
  hobby.appendChild(document.createElement("br")); // Add a line break for spacing
  hobby.appendChild(newInput);
  // 5. Restore the saved value to the original input.
  inputHobby.value = saveHobby;
  console.log(hobby);
}
hobButton.addEventListener("click", hobbiesInput); */
if (subButton) {
  formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    const fname = document.getElementById("fname");
    const sname = document.getElementById("sname");
    const tname = document.getElementById("tname");
    const lname = document.getElementById("lname");
    const jobs = document.getElementById("jobs");
    const phoneNumber = document.getElementById("tel");
    const mail = document.getElementById("mail");
    const coun = document.getElementById("country");
    const cit = document.getElementById("city");
    const tow = document.getElementById("town");

    const fnames =
      fname.value + " " + sname.value + " " + tname.value + " " + lname.value;
    localStorage.setItem("firstname", fnames);
    localStorage.setItem("jobuser", jobs.value);
    localStorage.setItem("phoneNumber", phoneNumber.value);
    localStorage.setItem("mail", mail.value);
    localStorage.setItem(
      "loc",
      coun.value + " - " + cit.value + " - " + tow.value
    );
    window.location.href = "boj.html";
  });
}
const elementname = document.querySelector(".nameuser");
const jobs = document.querySelector("#jobuser");
const phone = document.querySelector(".tele");
const email = document.querySelector(".mail");
const place = document.querySelector(".location");
window.onload = function () {
  const name = localStorage.getItem("firstname");
  const job = localStorage.getItem("jobuser");
  const telephone = localStorage.getItem("phoneNumber");
  const mail = localStorage.getItem("mail");
  const loc = localStorage.getItem("loc");
  if (window.location.href == "http://127.0.0.1:5500/boj.html") {
    elementname.textContent = name;
    jobs.textContent = job;
    phone.textContent = telephone;
    email.textContent = mail;
    place.textContent = loc;
  }
};
