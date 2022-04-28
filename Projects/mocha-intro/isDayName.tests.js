describe("the isDayName function", function(){
    it("return a bolean if the string the string passed 'Saturday' is in the days of the week with 'true'", function(){
        assert.equal(true, isDayName("Satruday"));
    })
    it("return a bolean if the string the string passed 'Monday' is in the days of the week with 'true'", function(){
        assert.equal(true, isDayName("Monday"));
    })
    it("return a bolean if the string the string passed 'January' is in the days of the week with 'false'", function(){
        assert.equal(false, isDayName("January"));
    })
})