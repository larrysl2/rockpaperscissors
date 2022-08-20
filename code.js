
// var p=0;
// var c=0;
// function getComputerChoice()
// {
//     x=Math.floor(Math.random()*3);
//     if (x==0)
//         {
//             console.log("CPU selected Rock");
//             return 'ROCK';
//         }
//     else if (x==1)
//         {
//             console.log("CPU selected Paper");
//             return 'PAPER';
//         }
//     else 
//         {
//             console.log("CPU selected Scissor");
//             return 'SCISSORS';
//         }  
// }
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
   

// function playRound(playerSelections, computerselection)
// {
    
//     switch(true )
//     {
        
//         case playerSelections=== computerselection:
//         console.log(playerSelections);
//         console.log( "Tie!");
//         break;
        
//         case ((playerSelections === 'ROCK' && computerselection=== 'PAPER') ||(playerSelections === 'SCISSORS' && computerselection=== 'ROCK') ||(playerSelections === 'PAPER' && computerselection==='SCISSORS')):
//             console.log(playerSelections);
//         c++;
//         console.log ("You Lose! " + computerselection+ " beats " +playerSelections);
//         break;
       
//         case ((playerSelections === 'ROCK' && computerselection=== 'SCISSORS') ||(playerSelections === 'SCISSORS' && computerselection=== 'PAPER') ||(playerSelections === 'PAPER' && computerselection==='ROCK')):
//             console.log(playerSelections);
//         p++;
//         console.log ( "You Win! " + playerSelections+ " beats " + computerselection);
//         break;
       
        
//     }
// }


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
