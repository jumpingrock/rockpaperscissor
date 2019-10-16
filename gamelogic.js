const chalk = require('chalk');

const formDetails = {
Rock : {win: 'Scissor', extWin:'Lizard', winVocab: 'crush'},
Paper : {win: 'Rock', extWin: 'Spock', winVocab: 'smolders'},
Scissor : {win: 'Paper', extWin: 'Lizard', winVocab: 'cuts'},
Lizard : {win: 'Spock', extWin: 'Paper', winVocab: 'eats'},
Spock : {win: 'Scissor', extWin: 'Rock', winVocab: 'vaporizes'}  
}

winCondition = (player, comp, form) => {

    let playerForm = form[player];
    let compForm = form[comp];

    if (formDetails[playerForm].win == compForm || formDetails[playerForm].extWin == compForm) {
        return chalk.green(form[player] + " " + formDetails[playerForm].winVocab + " " + form[comp]+ " you win!!");

    }else if (formDetails[compForm].win == playerForm || formDetails[compForm].extWin == playerForm) {
        return chalk.red(form[comp] + " " + formDetails[compForm].winVocab + " " + form[player] + " you lose..");

    }
    

}

exports.winCondition = winCondition;