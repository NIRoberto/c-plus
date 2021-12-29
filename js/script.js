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
