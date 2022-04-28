describe ("the isWeekday function", function(){
    it("should return a bolean if a string parameter taken in is in the days of the week with 'true'", function(){
        assert.equal(true, isWeekday('Thursday'));
    })
    it("should return a bolean if a string parameter taken in is not in the days of the week with 'false'", function(){
        assert.equal(false, isWeekday('Saturday'));
    })
})