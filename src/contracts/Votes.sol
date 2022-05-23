// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

contract Votes {
  address owner;
  struct Vote {
    string name;
    uint votes;
  }

  mapping(address => Vote[]) public votes;

  event addVoter(address voter, string name, uint votes);

  constructor() {
    owner = msg.sender;
  }

  function addVote(string memory _name) public {
    votes[owner].push(Vote(_name, 0));
    emit addVoter(owner, _name, 0);
  }

  function incrementVote() public {
    votes[owner][0].votes = votes[owner][0].votes + 1;
  }

  function getVoter() view public returns(Vote[] memory){
    return votes[owner];
  }
  
}