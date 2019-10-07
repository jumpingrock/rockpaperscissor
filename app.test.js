const {randomGen, choiceInput} = require('./app');


test ('should output random number', () => {
    const test = randomGen(3);
    expect(test).toBeLessThan(4);
    
    const test2 = randomGen(5);
    expect(test2).toBeLessThan(6);

});

test ('output should not contain spock or lizard if false is inputted', () => {
    const test = choiceInput(false);
    expect(test).not.toContain('Spock');
    expect(test).not.toContain('Lizard');
});

test ('output should contain spock and lizard if true is inputted', () => {
    const test = choiceInput(true);
    expect(test).toContain('Spock');
    expect(test).toContain('Lizard');

});