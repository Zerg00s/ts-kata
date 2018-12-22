import solution = require('../src/scripts/solution');
import {expect, assert} from "chai";

describe("solution", function(){
  it("should return 3 Starts", function(){
    expect(solution.repeatStr(3, "*")).to.equal("***");
  });
  it("should show 6 I's", function(){
    expect(solution.repeatStr(6, "I")).to.equal("IIIIII");
  });
  it("must show 5 Hello's", function(){
    assert.equal(solution.repeatStr(5, "Hello"), "HelloHelloHelloHelloHello");
  });
});