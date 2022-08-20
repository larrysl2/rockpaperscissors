var p=0;
var c=0;
function getComputerChoice()
{
    x=Math.floor(Math.random()*3);
    if (x==0)
        {
            console.log("cpuock");
            return 'ROCK';
        }
    else if (x==1)
        {
            console.log("cpupaper");
            return 'PAPER';
        }
    else 
        {
            console.log("cpuscissor");
            return 'SCISSORS';
        }
        
}
function playerSelectionf(){
    let playerSelection = '';
    var ps=0
    do
    {
        let playerSelectionU = prompt("Select rock, paper or scissors")
         playerSelection = playerSelectionU.toUpperCase();
        if((playerSelection == 'ROCK' || playerSelection =='PAPER' || playerSelection == 'SCISSORS'|| playerSelection==null))
        {
            ps =1
            
        }
        
    } while(ps!=1);
    console.log(playerSelection);
    return playerSelection;
    
}
   
const computerselection = getComputerChoice();
const playerSelections = playerSelectionf() 
console.log(playRound(playerSelections, computerselection));
function playRound(playerSelections, computerselection)
{
    
    switch(true )
    {
        
        case playerSelections=== computerselection:
        console.log(playerSelections);
        return "Tie!";
        break;

        case ((playerSelections === 'ROCK' && computerselection=== 'PAPER') ||(playerSelections === 'SCISSORS' && computerselection=== 'ROCK') ||(playerSelections === 'PAPER' && computerselection==='SCISSORS')):
        {
        c++;
        return ("You Lose! " + computerselection+ " beats " +playerSelections);
        break;
        }
       
        case ((playerSelections === 'ROCK' && computerselection=== 'SCISSORS') ||(playerSelections === 'SCISSORS' && computerselection=== 'PAPER') ||(playerSelections === 'PAPER' && computerselection==='ROCK')):
        {
        p++;
        return ( "You Win! " + playerSelections+ " beats " + computerselection);
        break;
        }
    }
}
    
    
    
    
function game()
{
    const computerselection = getComputerChoice();
    const playerSelections = playerSelectionf() 
    for (let i = 0; i < 5; i++) 
        {
            playRound((playerSelections, computerselection));
            console.log(playRound());
        }
    if(c>p)
        {
            return( "Loser");
        }
    else if(p>c)
        {
            return( "Winner");
        }
    else
        {
            return ("Tie");
        }
}
console.log(game());