describe('leapYear', function() {
  it("is false for a year that is not divisible by 4", function() {
    leapYear(1999).should.equal(false);
  });

  it("is true for most years divisible by 4", function() {
  	leapYear(2012).should.equal(true);
  });

  it("is false for most years divisible by 100", function() {
  	leapYear(1900).should.equal(false);
  });
  // There's one final rule for leap years: if a year is divisible by 400, it is a leap year. Write a test, make it pass, then refactor your code.
  it("is true for most years divisible by 400", function() {
  	leapYear(2000).should.equal(true);
  });
});