// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract Tamagochi{
    address private owner; 

 struct Meals {
    string name;
    uint16 points;
 }
 struct TamaCreature {
    string name;
    uint16 foodLvl;
    uint16 happinessLvl;
 }
 
 constructor() {
    owner = msg.sender;

 }

 mapping (address => TamaCreature) creatures;

 function addTama( string memory name) public{
    creatures[msg.sender] = (TamaCreature({
        name: name,
        foodLvl: 50,
        happinessLvl: 50
    }));
 }

 function getMyCreature() public  view returns (string memory name, uint16 foodLvl, uint16 happinessLvl){
    name = creatures[msg.sender].name;
    foodLvl = creatures[msg.sender].foodLvl;
    happinessLvl = creatures[msg.sender].happinessLvl;

 }

 function playtime () public{

   require(creatures[msg.sender].happinessLvl<100, "Thank you for playing with me, now leave me alone!");
   creatures[msg.sender].happinessLvl+=5;
   
 }

}