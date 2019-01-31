pragma solidity ^0.5.0;

contract Election{

	//Model a candidate
	struct Candidate{
		uint id;
		string name;
		uint voteCount;
	}
	//Store Candidates
	//Fetch Candidates
	mapping(uint=>Candidate) public candidates;
	//Store Candidates Count
	uint public candidateCount;
	//Constructor
	constructor() public{
		addCandidate("Sunny Singh");
		addCandidate("Bunny Singh");
	}

	function addCandidate(string memory _name) private{
		candidateCount++;
		candidates[candidateCount] = Candidate(candidateCount,_name,0);
	}
}