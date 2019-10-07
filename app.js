const chalk = require('chalk');
const figlet = require('figlet');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

var form = ['Rock', 'Paper', 'Scissor'];

//New game init begin here
console.log(chalk.green(figlet
    .textSync("Welcome to Rock Paper Scissors!", {horizontalLayout: 'half'})));

// rl.question('With Spock (y/n)? ', (ans) => {
//     var spock = (ans == "y") ? true : false;
//     var numChoice = (ans == "y") ? 5 : 3;
//     rl.close();
// });
var spock = false; //set for no spock
var numChoice = 3;

choiceInput = (ifspock) => { //inform user of the choice avaliable
    console.log(chalk.yellow("Enter your numeric choice of form!"));
    if(ifspock){//for extension into lizard spock
        form = ['Rock', 'Paper', 'Scissor', 'Lizard', 'Spock']; 
        numChoice = 5;
        for(let i = 0; i < numChoice; i++){
            console.log(i+1+". ", form[i]);
        }
    }else {//normal game no spock
        for(let i = 0; i < numChoice; i++){
            console.log(i+1+". ", form[i]);
        }
    }
    console.log("q. ", "Quit");
    return form;
}

randomGen = (max) => { //simple random number generator

    return Math.floor(Math.random() * max);
}

gamePlay = () => { // main game logic
    choiceInput(spock);
    rl.question('Your choice? ', (ans) => {
        // TDD can you register a choice
        // console.log(numChoice);
        var answer = Number.parseInt(ans) -1;
        var randomNum = randomGen(numChoice);
        // console.log("answer: " + answer + " "+ typeof(answer) +" random: " + randomNum + " " + typeof(randomNum));
        if (ans.toLowerCase() == "q"){ //quit game
            console.log(chalk.green("Thanks for playing! Good bye!"));
            rl.close();
            return;
        }else if (answer == randomNum) {
            console.log("\n" + form[answer] + " vs " + form[randomNum] + " it is a draw!" + "\n");

        }else if (answer == 0 && randomNum == 2) {
            console.log(chalk.green("\n" + form[answer] + " destroy " + form[randomNum] + " you win!!" + "\n"));

        }else if (answer == 0 && randomNum == 1) {
            console.log(chalk.red("\n" + form[randomNum] + " smolder " + form[answer] + " you lose.." + "\n"));

        }else if (answer == 1 && randomNum == 0) {
            console.log(chalk.green("\n" + form[answer] + " smolder " + form[randomNum] + " you win!!" + "\n"));

        }else if (answer == 1 && randomNum == 2) {
            console.log(chalk.red("\n" + form[randomNum] + " cuts " + form[answer] + " you lose.." + "\n"));

        }else if (answer == 2 && randomNum == 1) {
            console.log(chalk.green("\n" + form[answer] + " cut " + form[randomNum] + " you win!!" + "\n"));

        }else if (answer == 2 && randomNum == 0) {
            console.log(chalk.red("\n" + form[randomNum] + " smash " + form[answer] + " you lose.." + "\n"));
            
        }else { //error input comment
            console.log("Incorrect input." + "\n");
        }
        gamePlay(); //recursive 
    });
    
}
//ps. used some coloring on font as output become gibberish very quickly after playing afew games
gamePlay();

exports.choiceInput = choiceInput;
exports.randomGen = randomGen;



