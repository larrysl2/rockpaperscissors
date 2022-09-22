const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
var p =0;
var c = 0;
var t=0;
var playerSelections = '';

paper.addEventListener("click", returnpaper);
    function returnpaper() {
        playerSelections = 'PAPER';
        var cc = getComputerChoice();
        var result = playRound(playerSelections,cc);
        document.querySelector(".youselected").innerHTML = ("You selected: Paper");
        document.querySelector(".compselected").innerHTML = ("Computer selected: " +cc);
        document.querySelector(".result").innerHTML = (result);
        document.querySelector(".pwins").innerHTML = ("Player wins: " +p);
        document.querySelector(".cwins").innerHTML = ("Computer wins: " +c);
        document.querySelector(".ties").innerHTML = ("Ties: " + t);
        if (p==5)
        {
            
            alert("PLAYER WINS")
            alert("CHOOSE IMAGE FOR NEW GAME");
            p=0;
            c=0;
            t=0;
        }
        else if (c==5)
        {
            alert("COMPUTER WINS")
            alert("CHOOSE IMAGE FOR NEW GAME");
            p=0;
            c=0;
            t=0;
        }
}
rock.addEventListener("click", returnrock);
    function returnrock() {
        playerSelections = "ROCK";
        var cc = getComputerChoice();
        var result = playRound(playerSelections,cc);
        document.querySelector(".youselected").innerHTML = ("You selected: Rock");
        document.querySelector(".compselected").innerHTML = ("Computer selected: " +cc);
        document.querySelector(".result").innerHTML = (result);
        document.querySelector(".pwins").innerHTML = ("Player wins: " +p);
        document.querySelector(".cwins").innerHTML = ("Computer wins: " +c);
        document.querySelector(".ties").innerHTML = ("Ties: " + t);
}
scissors.addEventListener("click", returnscissors);
    function returnscissors() {
        playerSelections = "SCISSORS";
        var cc = getComputerChoice();
        var result = playRound(playerSelections,cc);
        document.querySelector(".youselected").innerHTML = ("You selected: Scissors");
        document.querySelector(".compselected").innerHTML = ("Computer selected: " +cc);
        document.querySelector(".result").innerHTML = (result);
        document.querySelector(".pwins").innerHTML = ("Player wins: " +p);
        document.querySelector(".cwins").innerHTML = ("Computer wins: " +c);
        document.querySelector(".ties").innerHTML = ("Ties: " + t);
}

function getComputerChoice()
{
    x=Math.floor(Math.random()*3);
    if (x==0)
        {
            console.log("CPU selected Rock");
            return 'ROCK';
        }
    else if (x==1)
        {
            console.log("CPU selected Paper");
            return 'PAPER';
        }
    else 
        {
            console.log("CPU selected Scissor");
            return 'SCISSORS';
        }  
}
// function playerSelectionf(){
//     let playerSelection = '';
//     var ps=0
//     do
//     {
//         let playerSelectionU = prompt("Select rock, paper or scissors")
//          playerSelection = playerSelectionU.toUpperCase();
//         if((playerSelection == 'ROCK' || playerSelection =='PAPER' || playerSelection == 'SCISSORS'|| playerSelection==null))
//         {
//             ps =1
//         }
//     } while(ps!=1);
//     return playerSelection;   
// }

function playRound(playerSelections, computerselection)
{
    switch(true)
    {
        case playerSelections=== computerselection:
        t++;
        return( "Tie!");
        
        
        case ((playerSelections === 'ROCK' && computerselection=== 'PAPER') ||(playerSelections === 'SCISSORS' && computerselection=== 'ROCK') ||(playerSelections === 'PAPER' && computerselection==='SCISSORS')):
        c++;
        return ("You Lose! " + computerselection+ " beats " +playerSelections);
        
       
        case ((playerSelections === 'ROCK' && computerselection=== 'SCISSORS') ||(playerSelections === 'SCISSORS' && computerselection=== 'PAPER') ||(playerSelections === 'PAPER' && computerselection==='ROCK')):   
        p++;
        return ( "You Win! " + playerSelections+ " beats " + computerselection);
        
    }
}


// function game()
// {
//     for (let i = 0; i < 5; i++) 
//         {
//             playRound(playerSelectionf(), getComputerChoice());
            
//         }
//     if(c>p)
//         {
//             return( "Loser");
//         }
//     else if(p>c)
//         {
//             return( "Winner");
//         }
//     else
//         {
//             return ("Tie");
//         }
// }
//  console.log(game()+" game outcome");
