
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
    console.log("foreach")
    x.addEventListener("click",(e)=>{
        if(!gameOver){

        
        if(activeplayer == 0){
        e.target.value = "X";
        e.target.setAttribute('disabled','')
        player1.push(i);
        console.log("Player 1 : ",player1)
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
    // else if(gameOver){
    //     init();
    //     console.log("hello")
    // }
    });
})

const checkWinner = ()=>{
    let strplayer1 = "";
    let strplayer2="";
    
    player1.forEach((val)=>{
        strplayer1 +=val;  
    })
    // console.log(strplayer1);

    if(strplayer1.includes("012")||strplayer1.includes("210")||strplayer1.includes("120")||strplayer1.includes("102")||strplayer1.includes("021")||strplayer1.includes("201")
    ||strplayer1.includes("345")||strplayer1.includes("435")||strplayer1.includes("543")||strplayer1.includes("354")||strplayer1.includes("453")||strplayer1.includes("534")
    ||strplayer1.includes("678")||strplayer1.includes("687")||strplayer1.includes("768")||strplayer1.includes("786")||strplayer1.includes("867")||strplayer1.includes("876")
    ||strplayer1.includes("036")||strplayer1.includes("063")||strplayer1.includes("603")||strplayer1.includes("630")||strplayer1.includes("306")||strplayer1.includes("360")
    ||strplayer1.includes("147")||strplayer1.includes("174")||strplayer1.includes("417")||strplayer1.includes("471")||strplayer1.includes("714")||strplayer1.includes("741")
    ||strplayer1.includes("258")||strplayer1.includes("285")||strplayer1.includes("528")||strplayer1.includes("582")||strplayer1.includes("825")||strplayer1.includes("852")
    ||strplayer1.includes("048")||strplayer1.includes("084")||strplayer1.includes("408")||strplayer1.includes("480")||strplayer1.includes("804")||strplayer1.includes("840")
    ||strplayer1.includes("246")||strplayer1.includes("264")||strplayer1.includes("426")||strplayer1.includes("462")||strplayer1.includes("624")||strplayer1.includes("642"))
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
     console.log(strplayer2);

    if(strplayer2.includes("012")||strplayer2.includes("210")||strplayer2.includes("120")||strplayer2.includes("102")||strplayer2.includes("021")||strplayer2.includes("201")
    ||strplayer2.includes("345")||strplayer2.includes("435")||strplayer2.includes("543")||strplayer2.includes("354")||strplayer2.includes("453")||strplayer2.includes("534")
    ||strplayer2.includes("678")||strplayer2.includes("687")||strplayer2.includes("768")||strplayer2.includes("786")||strplayer2.includes("867")||strplayer2.includes("876")
    ||strplayer2.includes("036")||strplayer2.includes("063")||strplayer2.includes("603")||strplayer2.includes("630")||strplayer2.includes("306")||strplayer2.includes("360")
    ||strplayer2.includes("147")||strplayer2.includes("174")||strplayer2.includes("417")||strplayer2.includes("471")||strplayer2.includes("714")||strplayer2.includes("741")
    ||strplayer2.includes("258")||strplayer2.includes("285")||strplayer2.includes("528")||strplayer2.includes("582")||strplayer2.includes("825")||strplayer2.includes("852")
    ||strplayer2.includes("048")||strplayer2.includes("084")||strplayer2.includes("408")||strplayer2.includes("480")||strplayer2.includes("804")||strplayer2.includes("840")
    ||strplayer2.includes("246")||strplayer2.includes("264")||strplayer2.includes("426")||strplayer2.includes("462")||strplayer2.includes("624")||strplayer2.includes("642"))
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


let rematch = ()=>{
        if(player1winner < 3 || player2winner < 3)
        {
            activeplayer = 0;  
            btn.forEach((x)=>{
                x.setAttribute('disabled','false');
                x.value = ' ';
            })
            init();  
        console.log("i run")
        }
        else{
            console.log("runing")
            player1winner =0;
            player2winner =0;
            player1loss=0;
            player2loss =0;
            init();
        }
}

function init(){
        document.querySelector('.won1').innerHTML = player1winner;
        document.querySelector('.won2').innerHTML = player2winner;
        document.querySelector('.loss1').innerHTML = player1loss;
        document.querySelector('.loss2').innerHTML = player2loss;
        // console.log("run");
       
}

