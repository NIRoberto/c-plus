'use  strict'
const toggle1 = document.querySelector("#toggle1");
const toggle2 = document.querySelector("#toggle2");
const toggle3 = document.querySelector("#toggle3");

console.log(toggle1, toggle2, toggle3);

toggle1.addEventListener("click", (e) => {
  document.querySelector(".move").classList.add("move1");
  document.querySelector("body").classList.add("b1");
  let btn = document.querySelector(".btns");
  let reset = document.querySelector(".reset");
  let del = document.querySelector(".d");

  let equal = document.querySelector(".equal");
  reset.classList.add("r1");
  reset.classList.remove("r3", "r2");
  del.classList.add("r1");
  del.classList.remove("r3", "r2");
  equal.classList.add("e1");
  equal.classList.remove("e3", "e2");
  btn.classList.add("btn1");
  btn.classList.remove("btn2", "btn3");
  let input = document.querySelector("input");
  input.classList.add("input-1");
  input.classList.remove("input-3", "input-2");
  document.querySelector("body").classList.remove("b3", "b2");
  document.querySelector(".move").classList.remove("move2", "move3");
  let arr = document.querySelectorAll(".c");
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.add("t1");
    arr[i].classList.remove("t2", "t3");
  }
});

toggle2.addEventListener("click", (e) => {
  document.querySelector(".move").classList.add("move2");
  document.querySelector("body").classList.add("b2");
  document.querySelector("body").classList.remove("b3", "b1");
  document.querySelector(".move").classList.remove("move1", "move3");
  //   document.querySelectorAll(".c").classList.add("t2");
  // document.querySelectorAll(".c").classList.remove("t1", "t3");
  let input = document.querySelector("input");
  input.classList.add("input-2");
  input.classList.remove("input-3", '"input-1"');
  let btn = document.querySelector(".btns");
  let reset = document.querySelector(".reset");
  let del = document.querySelector(".d");
  let equal = document.querySelector(".equal");
  reset.classList.add("r2");
  reset.classList.remove("r1", "r3");
  del.classList.add("r2");
  del.classList.remove("r1", "r3");
  equal.classList.add("e2");
  equal.classList.remove("e1", "e3");
  btn.classList.add("btn2");
  btn.classList.remove("btn1", "btn3");
  let arr = document.querySelectorAll(".c");
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.add("t2");
    arr[i].classList.remove("t1", "t3");
  }
});
toggle3.addEventListener("click", (e) => {
  document.querySelector(".move").classList.add("move3");
  document.querySelector("body").classList.add("b3");
  document.querySelector("body").classList.remove("b1", "b2");
  // document.querySelector(".move").classList.remove("move2", "move1");
  // document.querySelectorAll(".c").classList.remove("t2", "t1");
  let arr = document.querySelectorAll(".c");
  let btn = document.querySelector(".btns");
  let reset = document.querySelector(".reset");
  let del = document.querySelector(".d");

  let equal = document.querySelector(".equal");
  reset.classList.add("r3");
  reset.classList.remove("r1", "r2");
  del.classList.add("r3");
  del.classList.remove("r1", "r2");
  equal.classList.add("e3");
  equal.classList.remove("e1", "e2");
  btn.classList.add("btn3");
  btn.classList.remove("btn1", "btn2");
  let input = document.querySelector("input");
  input.classList.add("input-3");
  input.classList.remove("input-2", '"input-1"');

  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.add("t3");
    arr[i].classList.remove("t2", "t1");
  }
});

let num1 = [],
  num2 = [],a,s,m,d;

let states;

let seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
  document.querySelector("input").value += seven.innerHTML;
  if (!states) {
    num1.push(Number(seven.innerHTML));
  }
  else
    num2.push(Number(seven.innerHTML));
});

let six = document.querySelector(".six");
six.addEventListener("click", () => {
  document.querySelector("input").value += six.innerHTML;
  if (!states) {
    num1.push(Number(six.innerHTML));
  } else num2.push(Number(six.innerHTML));
});

let five = document.querySelector(".five");
five.addEventListener("click", () => {
  document.querySelector("input").value += five.innerHTML;
  if (!states) {
    num1.push(Number(five.innerHTML));
    
  }
  else {
    num2.push(Number(five.innerHTML));
  }
});

let nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
  document.querySelector("input").value += nine.innerHTML;
 if (!states) {
    num1.push(Number(nine.innerHTML));
  }
 else {
   num2.push(Number(nine.innerHTML));
  }
});

let zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
  document.querySelector("input").value += zero.innerHTML;
  if (!states) {
    
    num1.push(Number(zero.innerHTML));
  }
  else
  num2.push(Number(zero.innerHTML));

});

let four = document.querySelector(".four");
four.addEventListener("click", () => {
  document.querySelector("input").value += four.innerHTML;
  if (!states) {
    num1.push(Number(four.innerHTML));
  }
  else {
    num2.push(Number(four.innerHTML));
  }
});

let three = document.querySelector(".three");
three.addEventListener("click", () => {
  document.querySelector("input").value += three.innerHTML;
  if (!states) {
  num1.push(Number(three.innerHTML));
    
  }
  else
  num2.push(Number(three.innerHTML));
});

let one = document.querySelector(".one");
one.addEventListener("click", () => {
  document.querySelector("input").value += one.innerHTML;
  if (!states) {
  num1.push(Number(one.innerHTML));
    
  }
  else
  num2.push(Number(one.innerHTML));
});

let two = document.querySelector(".two");
two.addEventListener("click", () => {
  document.querySelector("input").value += two.innerHTML;
  if (!states) {
  num1.push(Number(two.innerHTML));
  }
  else
  num2.push(Number(two.innerHTML));
});

let eigth = document.querySelector(".eigth");
  eigth.addEventListener("click", () => {
  document.querySelector("input").value += eigth.innerHTML;
  if (!states) {
    num1.push(Number(eigth.innerHTML));
    
  }
  else
    num2.push(Number(eigth.innerHTML));
});

let add = document.querySelector(".add");
add.addEventListener("click", () => {
  document.querySelector('input').value =`${Number(num1.join(''))} ${add.innerHTML}`;
  console.log('num1:', num1, 'num2:', num2);
  states = true;
  a = 1;
  console.log("num1:", num1, "num2:", num2);
});
let div = document.querySelector(".division");
div.addEventListener("click", () => {
  document.querySelector("input").value = `${Number(num1.join(""))} ${
    div.innerHTML
    }`;
  d = 3;
  console.log("num1:", num1, "num2:", num2);
  states = true;
  console.log("num1:", num1, "num2:", num2);
});
let subu = document.querySelector(".sub");
subu.addEventListener("click", () => {
  document.querySelector("input").value = `${Number(num1.join(""))} ${
    subu.innerHTML
    }`;
  s = 2;
  console.log("num1:", num1, "num2:", num2);
  states = true;
  console.log("num1:", num1, "num2:", num2);
});
let prod = document.querySelector(".product");
prod.addEventListener("click", () => {
  document.querySelector("input").value = `${Number(num1.join(""))} ${
    prod.innerHTML
    }`;
  m = 4;
  console.log("num1:", num1, "num2:", num2);
  states = true;
  console.log("num1:", num1, "num2:", num2);
});
function calc(n1, n2,o) {
  let res;
  if (
    typeof n1 === "number" &&
    typeof n1 === "number" &&
    typeof o === "number"
  ) {
    switch (o) {
      case 1:
        res = n1 + n2;
        break;
      case 2:
        res = n1 - n2;
        break;
      case 3:
        res = n1 / n2;
        break;
      case 4:
        res = n1 * n2;
        break;
    }
    return res;
  } else {
    return "Wrong input";
  }
}


let equal = document.querySelector('.equal');
equal.addEventListener('click', () => {

  document.querySelector('input').value = calc(Number(num1.join('')), Number(num2.join('')),m)
  num1.splice(0, num1.length);
  num2.splice(0, num2.length);
  
})

let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  document.querySelector("input").value = "";
  num1.splice(0, num1.length);
  num2.splice(0, num2.length);

  states = false;
  // console.log(num1);
});
