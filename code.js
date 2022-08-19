function getComputerChoice()
{
    x=Math.floor(Math.random()*3);
    if (x==0)
        {
            return 'ROCK';
        }
    else if (x==1)
        {
            return 'PAPER';
        }
    else 
        {
            return 'SCISSORS';
        }
}
    
    let playerSelection = '';
    var ps=0
    do
    {
        let playerSelections = prompt("Select rock, paper or scissors")
        let playerSelection = playerSelections.toUpperCase();
        if((playerSelection == 'ROCK' || playerSelection =='PAPER' || playerSelection == 'SCISSORS'|| playerSelection==null))
        {
            ps =1
        }
    } while(ps!=1);
    console.log(playerSelection);
    
function playRound(playerSelection, computerselection)
{
    var p=0;
    var c=0;
    switch(true )
    {
        case playerSelection=== computerselection:
        console.log( "Tie!");
        break;

        case ((playerSelection === 'ROCK' && computerselection=== 'PAPER') ||(playerSelection === 'SCISSORS' && computerselection=== 'ROCK') ||(playerSelection === 'PAPER' && computerselection==='SCISSORS')):
        {
        c++;
        console.log("You Lose! + computerselection+ beats +playerSelection+");
        break;
        }
       
        case ((playerSelection === 'ROCK' && computerselection=== 'SCISSORS') ||(playerSelection === 'SCISSORS' && computerselection=== 'PAPER') ||(playerSelection === 'PAPER' && computerselection==='ROCK')):
        {
        c++;
        console.log( "You Win! + playerSelection+ beats + computerselection+");
        break;
        }
    }
}
    
    const computerselection = getComputerChoice();
    console.log(playRound(playerSelection, computerselection));
function game()
{
    for (let i = 0; i < 5; i++) 
        {
            playroud();
        }
    if(c>p)
        {
            console.log( "Loser");
        }
    else if(p>c)
        {
            console.log( "Winner");
        }
    else
        {
            console.log("Tie");
        }
}
