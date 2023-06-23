init();

const btn = document.querySelectorAll(".btn");

let player1=[];
let player2=[];
let activeplayer=0;

const active = ()=>{
if(activeplayer == 0){
    btn.forEach((e,i)=>{
        e.addEventListener("click",()=>{
            // e.classList.toggle('red');
            e.value = "X";
            // console.log(i);
            e.setAttribute('disabled','')
        })
    })
    activeplayer++;
    console.log(activeplayer)

}
else{
    btn.forEach((e,i)=>{
        e.addEventListener("click",()=>{
            // e.classList.toggle('red');
            e.value = "O";
            // console.log(i);
            e.setAttribute('disabled','')
        })
    })
    activeplayer--;
    console.log(activeplayer)
}
}

// btn.addEventListener("click",active())
btn.forEach((x)=>{
    x.addEventListener("click",active);
})



active();
function init(){
        document.querySelector('.won1').innerHTML = 0;
        document.querySelector('.won2').innerHTML = 0;
        document.querySelector('.loss1').innerHTML = 0;
        document.querySelector('.loss2').innerHTML = 0;
        // console.log("run");
}

