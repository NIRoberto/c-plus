const toggle1 =document.querySelector('#toggle1');
const  toggle2 =document.querySelector('#toggle2');
const toggle3 = document.querySelector('#toggle3');


console.log(toggle1, toggle2, toggle3);

toggle1.addEventListener('click', (e) => {
    document.querySelector(".move").classList.add("move1");
    document.querySelector("body").classList.add("b1", "b2");
    document.querySelector('body').classList.remove('b1', 'b2');
    document.querySelector('.move').classList.remove('move2', 'move3');

})

toggle2.addEventListener("click", (e) => {
    document.querySelector(".move").classList.add("move2");
  document.querySelector("body").classList.add("b1");
  document.querySelector("body").classList.remove("b3", "b1");
  document.querySelector(".move").classList.remove("move1", "move3");
});
toggle3.addEventListener("click", (e) => {
 document.querySelector(".move").classList.add("move3");
 document.querySelector("body").classList.add("b2");
  document.querySelector("body").classList.remove("b1", "b2");
  document.querySelector(".move").classList.remove("move2", "move1");
});