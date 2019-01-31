var Election = artifacts.require("./Election.sol");
var ElectionInstance;
contract("Election",function(accounts){
	it("initializes with 2 candidates",function(){
		return Election.deployed().then(function(instance){
			return instance.candidateCount();
		}).then(function(count){
			assert.equal(count, 2);
		});
	});

	it("initializes candidates with correct values",function(){
		return Election.deployed().then(function(instance){
			ElectionInstance = instance;
			return ElectionInstance.candidates(1);
		}).then(function(candidate){
			assert.equal(candidate[0],1,"Contains Correct ID");
			assert.equal(candidate[1],"Sunny Singh","Contains Correct Name");
			assert.equal(candidate[2],0,"Contains Correct Vote Count");
			return ElectionInstance.candidates(2);
		}).then(function(candidate){
			assert.equal(candidate[0],2,"Contains Correct ID");
			assert.equal(candidate[1],"Bunny Singh","Contains Correct Name");
			assert.equal(candidate[2],0,"Contains Correct Vote Count");
		});
	});
});