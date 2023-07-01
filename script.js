
let player1=[];
let player2=[];
let activeplayer=0;
let gameOver = false;
let player1winner=0;
let player2winner=0;
let player1loss=0;
let player2loss=0;
const btn = document.querySelectorAll(".btn");

init();

//     const winningCombinations = [
//         [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//         [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//         [0, 4, 8], [2, 4, 6] // Diagonals
//     ];
// console.log(winningCombinations[0]);


btn.forEach((x,i)=>{
    x.addEventListener("click",(e)=>{
        if(!gameOver){

        
        if(activeplayer == 0){
        e.target.value = "X";
        e.target.setAttribute('disabled','')
        player1.push(i);
        // console.log("Player 1 : ",player1)
        activeplayer++;
        }
        else{
        e.target.value = "O";
        e.target.setAttribute('disabled','')  
        player2.push(i);
        // console.log("Player 2 : ",player2)
        activeplayer--;
        }
        checkWinner();
    }
    else if(gameOver){
        init();
        console.log("hello")
    }
    });
})

const checkWinner = ()=>{
    let strplayer1 = "";
    let strplayer2="";
    
    player1.forEach((val)=>{
        strplayer1 +=val;  
    })
    // console.log(strplayer1);

    if(strplayer1.includes("012")||strplayer1.includes("345")||strplayer1.includes("678")
    ||strplayer1.includes("036")||strplayer1.includes("147")||strplayer1.includes("258")
    ||strplayer1.includes("048")||strplayer1.includes("246"))
    {
        console.log("Player 1 winner");
        player1winner++;
        player2loss++;
        document.querySelector('.won1').innerHTML = player1winner;
        document.querySelector('.loss2').innerHTML = player2loss;
        gameOver = true;
        
    }

    player2.forEach((val)=>{
        strplayer2 +=val;  
    })
    // console.log(strplayer2);

    if(strplayer2.includes("012")||strplayer2.includes("345")||strplayer2.includes("678")
    ||strplayer2.includes("036")||strplayer2.includes("147")||strplayer2.includes("258")
    ||strplayer2.includes("048")||strplayer2.includes("246"))
    {
        console.log("player 2 winner");
        player2winner++;
        player1loss++;
        document.querySelector('.won2').innerHTML = player2winner;
        document.querySelector('.loss1').innerHTML = player1loss;        

        gameOver = true;
        
    }
}

    

// const checkWinner = () => {
//   const winningCombinations = [
//     [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//     [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//     [0, 4, 8], [2, 4, 6] // Diagonals
//   ];

//   const currentPlayer = activeplayer === 1 ? player1 : player2;

//   for (let combination of winningCombinations) {
//     console.log(combination[0]);
//     if (
//       currentPlayer.includes(combination[0]) &&
//       currentPlayer.includes(combination[1]) &&
//       currentPlayer.includes(combination[2])
//     ) {
//       gameOver = true;
//       if (activeplayer === 1) {
//         console.log("Player 1 is the winner!");
//       } else {
//         console.log("Player 2 is the winner!");
//       }
//       break;
//     }
//   }
// };




function init(){
        document.querySelector('.won1').innerHTML = player1winner;
        document.querySelector('.won2').innerHTML = player2winner;
        document.querySelector('.loss1').innerHTML = player1loss;
        document.querySelector('.loss2').innerHTML = player2loss;
        // console.log("run");
        btn.forEach((x)=>{
            x.removeAttribute('disabled','');
            x.value = " "; 
        })
}

