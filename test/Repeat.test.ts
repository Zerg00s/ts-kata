import solution = require('../src/scripts/solution');

test('should return false given external link', () => {
    expect(solution.repeatStr(3, "*")).toBe("***");
});

