const {randomGen, choiceInput} = require('./app');
const {winCondition} = require('./gamelogic');


test ('should output random number', () => {
    for(var i=0; i<5; i++){
        const test = randomGen(3);
        expect(test).toBeLessThan(3);
        expect(test).toBeGreaterThanOrEqual(0);

        const test1 = randomGen(5);
        expect(test1).toBeLessThan(5);
        expect(test1).toBeGreaterThanOrEqual(0);
    }
});

test ('output should NOT contain spock and lizard if FALSE is inputted', () => {
    const test = choiceInput(false);
    expect(test).not.toContain('Spock');
    expect(test).not.toContain('Lizard');
    
    const test1 = choiceInput(true);
    expect(test1).toContain('Spock');
    expect(test1).toContain('Lizard');

});

test ('winCondition test without spock', () => {
    let form = ['Rock', 'Paper', 'Scissor'];

    const test = winCondition(0, 2, form);
    expect(test).toMatch("Rock crush Scissor you win!!");

    const test1 = winCondition(0, 1, form);
    expect(test1).toMatch("Paper smolders Rock you lose..");

    const test2 = winCondition(1, 2, form);
    expect(test2).toMatch("Scissor cuts Paper you lose..");

    const test3 = winCondition(1, 0, form);
    expect(test3).toMatch("Paper smolders Rock you win!!");
    
    const test4 = winCondition(2, 1, form);
    expect(test4).toMatch("Scissor cuts Paper you win!!");

    const test5 = winCondition(2, 0, form);
    expect(test5).toMatch("Rock crush Scissor you lose..");

    const test6 = winCondition(0, 0, form);
    expect(test6).toMatch("Rock vs Rock it is a draw!");
    
});

test ('winCondition test with spock', () => {
    let form = ['Rock', 'Paper', 'Scissor', 'Lizard', 'Spock']; 

    const test = winCondition(4, 0, form);
    expect(test).toMatch("Spock vaporizes Rock you win!!");

    const test1 = winCondition(4, 2, form);
    expect(test1).toMatch("Spock vaporizes Scissor you win!!");

    const test2 = winCondition(3, 4, form);
    expect(test2).toMatch("Lizard eats Spock you win!!");

    const test3 = winCondition(3, 1, form);
    expect(test3).toMatch("Lizard eats Paper you win!!");
    
    const test4 = winCondition(4, 1, form);
    expect(test4).toMatch("Paper smolders Spock you lose..");

    const test5 = winCondition(3, 2, form);
    expect(test5).toMatch("Scissor cuts Lizard you lose..");

    const test6 = winCondition(4, 4, form);
    expect(test6).toMatch("Spock vs Spock it is a draw!");
    
});