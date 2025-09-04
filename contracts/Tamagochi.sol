// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract Tamagochi{

    address private owner; 

    struct Meal {
        string name;
        uint16 points;
        bool exists;
    }

    struct TamaCreature {
        string name;
        uint16 foodLvl;
        uint16 happinessLvl;
    }

    mapping(string => Meal) public meals;

    constructor() {
        owner = msg.sender;

        meals["Kibble"] = (Meal({
            name: "Kibble",
            points: 5,
            exists: true
        }));

        meals["Churro"] = (Meal({
            name: "Churro",
            points: 10,
            exists: true
        }));

        meals["Steak"] = (Meal({
            name: "Steak",
            points: 15,
            exists: true
        }));
    }

    mapping (address => TamaCreature) creatures;

    function addTama( string memory name) public{
        creatures[msg.sender] = (TamaCreature({
            name: name,
            foodLvl: 50,
            happinessLvl: 50
        }));
    }

    function getMyCreature() public  view returns (string memory name){
        name = creatures[msg.sender].name;
    }

    function feedMyCreature(string memory meal) public {
        creatures[msg.sender].foodLvl += meals[meal].points;
    }

}