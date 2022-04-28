describe ("the isFromBellville function", function(){
    it("should return a bolean if a registration is from Bellville with 'true'", function(){
        assert.equal(true, isFromBellville('CY 123'));
    })
    it("should return a bolean if a registration is not from Bellville with 'false'", function(){
        assert.equal(false, isFromBellville('CJ 123'));
    })
})