const chalk = require('chalk');
const figlet = require('figlet');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

var spock = false; //set for no spock
var numChoice;
var form;

//New game init begin here
// rl.question('With Spock (y/n)? ', (ans) => {
//     var spock = (ans == "y") ? true : false;
//     var numChoice = (ans == "y") ? 5 : 3;
//     rl.close();
// });

choiceInput = (ifspock) => { //inform user of the choice avaliable
    console.log(chalk.yellow("Enter your numeric choice of form!"));
    if(!ifspock){//normal game
        form = ['Rock', 'Paper', 'Scissor'];
    }
    else {//spock game
        form = ['Rock', 'Paper', 'Scissor', 'Lizard', 'Spock'];  
    }
    numChoice = form.length;
    for(let i = 0; i < numChoice; i++){
        console.log(i+1+". ", form[i]);
    }
    console.log("q. ", "Quit");
    return form;
}

randomGen = (max) => Math.floor(Math.random() * max);

winCondition = (player, comp) => {
    
    if (player == 0 && comp == 2) {
        return chalk.green(form[player] + " destroy " + form[comp] + " you win!!");

    }else if (player == 0 && comp == 1) {
        return chalk.red(form[comp] + " smolder " + form[player] + " you lose..");

    }else if (player == 1 && comp == 0) {
        return chalk.green(form[player] + " smolder " + form[comp] + " you win!!");

    }else if (player == 1 && comp == 2) {
        return chalk.red(form[comp] + " cuts " + form[player] + " you lose..");

    }else if (player == 2 && comp == 1) {
        return chalk.green(form[player] + " cuts " + form[comp] + " you win!!")

    }else if (player == 2 && comp == 0) {
        return chalk.red(form[comp] + " destroy " + form[player] + " you lose..")

    }
}

gamePlay = () => { // main game logic
    console.log(chalk.green(figlet
        .textSync("Welcome to Rock Paper Scissors!", {horizontalLayout: 'half'})));
    choiceInput(spock);
    rl.question('Your choice? ', (ans) => {

        var answer = Number.parseInt(ans) -1;
        var randomNum = randomGen(numChoice);

        if (ans.toLowerCase() == "q"){ //quit game
            console.log(chalk.green("Thanks for playing! Good bye!"));
            return;

        }else if (answer == randomNum) {
            console.log("\n" + form[answer] + " vs " + form[randomNum] + " it is a draw!" + "\n");
        
        }else if (typeof(answer) == 'number') {
            var conditionReply = winCondition(answer,randomNum);
            console.log("\n" + conditionReply + "\n");

        }else { //error input comment
            console.log("\n" + "Incorrect input." + "\n");
        }
        rl.close();
        // gamePlay(); //recursive 
    });
}

//ps. used some coloring on font as output become gibberish very quickly after playing afew games

gamePlay();

exports.choiceInput = choiceInput;
exports.randomGen = randomGen;
exports.gamePlay = gamePlay;
exports.winCondition = winCondition;