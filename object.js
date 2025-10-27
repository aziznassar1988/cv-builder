//* Function to Add new Input
let plusButton = document.getElementById("splus");
let langButton = document.querySelector(".langplus");
let hobButton = document.querySelector(".hobplus");

// 1. Get the container and the existing input.
let skillbar = document.querySelector(".skillbar");

// 2. define array variable to store the data from inputs field in skills section
let skillArr = [];

plusButton?.addEventListener("click", (e) => {
  e.preventDefault();

  const inputsArray = getInputsArray();
  const inputHasValue = inputsArray.every((input) => Boolean(input.value.trim()));

  // early return
  if (!inputHasValue) {
    alert("Your Input is Empty First Fill Input after that Press + Button to open new Input");

    return;
  }

  // 4.create new input element after check if current input have a value
  addItem();
  createInputElement();
});

function handleFormSubmit(event) {
  event.preventDefault();

  const formEelement = event.target;
  const formValues = getFormValues(formEelement);
  const buildStoragePayload = createStoragePayload(formValues);
  // LocalStorage does not store objects -> Only Strings
  localStorage.setItem("userInfo", JSON.stringify(buildStoragePayload));
  window.location.href = "boj.html";
}

function getInputsArray() {
  const inputsNodeList = document.querySelectorAll(".inputskill");

  return Array.from(inputsNodeList);
}

function addItem() {
  const inputsArray = getInputsArray();
  const inputValues = inputsArray.map((input) => input.value.trim());

  skillArr = inputValues;
  console.log(skillArr);
}

function getFormValues(form) {
  // To get all form entries directly
  const formData = new FormData(form);
  return formData.entries();
}

function createStoragePayload(formDataEntries) {
  const payload = {
    nameParts: "",
    jobuser: "",
    phoneNumber: "",
    mail: "",
    skills: "",
  };

  const nameParts = ["fname", "sname", "tname", "lname"];
  const locationParts = ["country", "city", "town"];

  for (const [fieldName, fieldValue] of formDataEntries) {
    if (nameParts.includes(fieldName)) {
      payload["nameParts"] += `${fieldValue} `;
      continue;
    }

    if (fieldName === "job") {
      payload["jobuser"] = fieldValue;
      continue;
    }

    if (fieldName === "telephone") {
      payload["phoneNumber"] = fieldValue;
      continue;
    }

    if (fieldName === "mail") {
      payload["mail"] = fieldValue;
      continue;
    }

    if (locationParts.includes(fieldName)) {
      payload["loc"] = fieldValue;
      continue;
    }

    if (fieldName === "skills") {
      payload["skills"] += `${fieldValue},`;
      continue;
    }
  }

  return payload;
}

function getStoragePayload() {
  const payload = localStorage.getItem("userInfo");
  const parsedPayload = JSON.parse(payload);
  console.log(parsedPayload);
  return parsedPayload;
}

function createInputElement() {
  const newInput = document.createElement("input");

  // By default inputs are text
  // newInput.type = "text";
  newInput.name = "skills";
  newInput.placeholder = "Enter other Skill";
  newInput.style.width = "80vw";
  newInput.classList.add("inputskill");

  // 5. Append the new input to the container.
  skillbar.appendChild(document.createElement("br")); // Add a line break for spacing
  skillbar.appendChild(newInput);
}

function generateSkillsList() {
  const values = getStoragePayload();
  console.log(values);
}
