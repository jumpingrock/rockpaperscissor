const chalk = require('chalk');
const figlet = require('figlet');
const readline = require('readline');
const {winCondition} = require('./gamelogic');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

var spock = true; //set for no spock
var numChoice;
var form;

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

gamePlay = () => { // main game logic
    console.log(chalk.green(figlet
        .textSync("Welcome to Rock Paper Scissors!", {horizontalLayout: 'half'})));
    choiceInput(spock);
    rl.question('Your choice? ', (ans) => {

        var answer = Number.parseInt(ans) -1;
        var randomNum = randomGen(numChoice);
        
        if (typeof(answer) == 'number' && answer <= form.length) { //logic stored in gamelogic.js
            var conditionReply = winCondition(answer,randomNum, form);
            console.log("\n" + conditionReply + "\n");
        
        }else if (ans.toLowerCase() == "q"){ //quit game
            console.log(chalk.green("Thanks for playing! Good bye!"));
            rl.close();
            return;

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
