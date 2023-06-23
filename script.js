
const btn = document.querySelectorAll(".btn");

let player1=[];
let player2=[];



btn.forEach((e,i)=>{
    e.addEventListener("click",()=>{
        e.classList.toggle('red');
        console.log(i);
    })
})

