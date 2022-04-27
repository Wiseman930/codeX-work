describe("the isFrom fuction", function(){

    it("should show return boolean with 'true'", function(){
        assert.equal(true, isFrom('CJ 98912', 'CJ'))

    });
    it("should show return boolean with 'false'", function(){
        assert.equal(false, isFrom('CJ 98912', 'CY'))

    });

})