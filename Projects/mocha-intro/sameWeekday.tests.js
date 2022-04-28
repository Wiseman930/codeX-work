describe ("the sameWeekday function", function(){
    it("should return a bolean if a registration number taken in is from Gauteng or Eastern Cape or Limpopo or Mpumalanga with 'true'", function(){
        assert.equal(true, sameWeekday('2016-11-19', '2016-11-26'));
    })
    it("should return a bolean if a registration number taken in is not from Gauteng or Eastern Cape or Limpopo or Mpumalanga with 'false'", function(){
        assert.equal(false, sameWeekday('2016-11-19', '2016-11-28'));
    })
})