const {randomGen, choiceInput, winCondition} = require('./app');


test ('should output random number', () => {
    for(var i=0; i<5; i++){
        const test = randomGen(3);
        expect(test).toBeLessThan(3);
        expect(test).toBeGreaterThanOrEqual(0);

        const test2 = randomGen(5);
        expect(test2).toBeLessThan(5);
        expect(test2).toBeGreaterThanOrEqual(0);
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

test ('winCondition test', () => {
    const test = winCondition(0, 2);
    expect(test).toMatch("Rock destroy Scissor you win!!");

    const test1 = winCondition(0, 1);
    expect(test1).toMatch("Paper smolder Rock you lose..");

    const test2 = winCondition(1, 2);
    expect(test2).toMatch("Scissor cuts Paper you lose..");

    const test3 = winCondition(1, 0);
    expect(test3).toMatch("Paper smolder Rock you win!!");
    
    const test5 = winCondition(2, 1);
    expect(test5).toMatch("Scissor cuts Paper you win!!");

    const test4 = winCondition(2, 0);
    expect(test4).toMatch("Rock destroy Scissor you lose..");
    
});