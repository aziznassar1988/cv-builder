// let card = document.getElementById("cardbuy");
// card.remove();

// let title = document.createElement("h1");
// let section = document.getElementById("cardp");
// section.prepend(title);
// title.classList.add("title");
// title.style.width = "50%";
// title.innerText = "Hello";
// title.innerText = "World";
// title.id = "myid";

// // declaration Function
// let favor = document.getElementById("favor");
// favor.classList.add("title");
// favor.style.width = "100%";
// favor.innerText = "magic tools";
// (function () {
//   let me = document.getElementsByTagName("h1")[1];
//   me.setAttribute("id", "myheader");
//   me.classList.add("title");
// })();

// // Expression Function (Arrow Function With Name)
// const mydivfunc = () => {
//   let mydiv = document.getElementById("mydiv");
//   let header = document.createElement("h1");
//   header.innerText = "Other Titles";
//   header.style.color = "blue";
//   mydiv.prepend(header);
// };
// // setTimeout(mydivfunc , 3000);

// /* // Arrow Function (Anonymous Function)
// () => {
//   let mydiv = document.getElementById("mydiv");
//   let header = document.createElement("h1");
//   header.innerText = "Other Titles";
//   header.style.color = "blue";
//   mydiv.prepend(header);
// }; */
// setTimeout(
//   //Start Anonymous Function
//   () => {
//   let mydiv = document.getElementById("mydiv");
//   let header = document.createElement("h1");
//   header.innerText = "Other Titles";
//   header.style.color = "blue";
//   mydiv.prepend(header);
//   }
//   //End Anonymous Function
//   , 2000);

// let header = document.createElement("h1");
// let section = document.getElementById("mydiv");
// let buy = document.getElementById("cardbuy");
// buy.addEventListener("click", (eo) => {
//   header.innerText = "Hello Everybody";
//   section.append(header);
//   header.style.backgroundColor = "red";
//   alert("Hello Everyone!!!");
//   //eo :  مجموعة الحدث  سواء كانت مجموعة الاحداث التي تحدث على الماوس او على الكيبود او على الشاشة او اثناء اللمس كما هي مقسمة في الجافا سكريبت(event object)
//   //target : العنصر الذي حصل عليه الحدث
//   eo.target.style.backgroundColor = "yellow";
//   //العنصر الذي يتم عليه الحدث في هذه المنطقة
// });

// let section = document.getElementsByTagName("section")[1];
// let buy = document.getElementById("cardbuy");
// buy.addEventListener("click",
//   (eo)=>{
//     let header = document.createElement("h1");
//     header.innerText="Hello World";
//     section.append(header);
//     section.style.backgroundColor="gray"
//     eo.target.remove();
//   }
// );

// dialog HTML using JS
// const buy = document.getElementById("cardbuy");
// const body = document.querySelector("body");
// const dia = document.getElementById("dia");
// const mes = document.getElementById("mes");
// const visa = document.getElementById("visa");
// const visanumber = document.getElementById("visanumber");
// const surebutton = document.getElementById("surebutton");
// const change= document.querySelector(".mode");

// buy.addEventListener("click", (eo) => {
//   dia.showModal();
//   body.style.opacity = "0.3";
//   eo.preventDefault();
// });
// visanumber.addEventListener("click", (eo) => {
//   if (visa.inputMode.valueOf() == "") {
//     alert("Your visa card is not enter!!!");
//   } else {
//     mes.showModal();
//     dia.close();
//     eo.preventDefault();
//   }
// });
// surebutton.addEventListener("click", (eo) => {
//   mes.close();
//   body.style.opacity = "1";
// });
// change.addEventListener("click",(eo) => {
//   document.querySelector("body").classList.toggle("dark");
//   eo.preventDefault();
// })

//object data type
let user = {
  firstname: "aziz",
  lastname: "Nassar",
  age: 37,
};
user.age = 38;
console.log(user.age);

user["firstname"] = "yousef";
console.log(user.firstname);

console.log(user);

//Array data type
let employee = [
  "Aziz",
  "Computer",
  5500,
  null,
  { position: "manager", Jobs: "developer" },
];
employee[0] = "Ahmad";

console.log(employee[0]);

console.log(employee[4].Jobs);

console.log(employee);

let age = 37;
employee[5] = age;
console.log(employee[5]);

employee[4].time = "17/5/2019";
console.log(employee[4].time);
console.log(employee);

//Function JS
//1-Area rectangle
let Area = (len, wid) => {
  return len * wid;
};
console.log("Area of rectangle:" + Area(3, 10));

//2-Area Circle
const pi = 3.14;
let AreaCircle = (radius) => {
  return `Area of circle is ${pi * radius * radius}`;
};
console.log(AreaCircle(10));

//3-Calculator
let cal = (x, y, operator) => {
  switch (operator) {
    case "+":
      console.log(`the resualt is ${x + y}`);
      break;
    case "-":
      console.log(`the resualt is ${x - y}`);
      break;
    case "*":
      console.log(`the resualt is ${x * y}`);
      break;

    default:
      console.log(`the resualt is ${x / y}`);
      break;
  }
};
cal(5, 7, "*");

//3-Calculator IF
let cals = (x, y, operator) => {
  if (operator == "+");
  console.log(`the resualt is ${x + y}`);
  elseif(operator == "-");
  console.log(`the resualt is ${x - y}`);
  elseif(operator == "*");
  console.log(`the resualt is ${x * y}`);
  elseconsole.log(`the resualt is ${x / y}`);
};
cal(45, 3, "/");

//loops
let cont = document.querySelector(".sec");
//Global Scope
//for loop
for (let i = 1; i <= 10; i++) {
  //Block Scope
  cont.innerHTML += `<h1>${i}</h1>`;
  //Nested loop
  for (let j = 1; j <= 10; j++) {
    //Nested Scope
    let resualt = i * j;
    cont.innerHTML += `<div><p>${i}*${j}=${resualt}</p></div>`;
  }
}
