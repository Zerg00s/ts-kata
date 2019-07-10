import solution = require('../src/scripts/solution');

test('should return ***', () => {
    expect(solution.repeatStr(3, "*")).toBe("***"); 
});

