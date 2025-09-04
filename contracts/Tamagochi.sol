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
        uint lastFed; 
        uint lastPlay; 
    }

    enum TamaStages { Baby, Toddler, Child, Teenager, Adult, Senior }

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

    function addTama( string memory name) public {
        creatures[msg.sender] = (TamaCreature({
            name: name,
            foodLvl: 50,
            happinessLvl: 50,
            lastFed: block.timestamp,
            lastPlay: block.timestamp
        }));
    }

    function getMyCreatureName() public  view returns (string memory name){
        name = creatures[msg.sender].name;
    }

    function getMyCreatureFoodLvl() public  view returns (uint16 foodLvl){
        foodLvl = creatures[msg.sender].foodLvl;
    }

    function getMyCreatureHappinessLvl() public  view returns (uint16 happinessLvl){
        happinessLvl = creatures[msg.sender].happinessLvl;
    }

    function feedMyCreature(string memory meal) public {
        require(meals[meal].exists, "This food is not available.");
        require(creatures[msg.sender].foodLvl < 100, "Im going to puke... bleh..");

        creatures[msg.sender].foodLvl += meals[meal].points;
    }

    function playtime () public {
        require(creatures[msg.sender].happinessLvl != 0, "Ohno i got bored to death!");
        require(creatures[msg.sender].happinessLvl<100, "Thank you for playing with me, now leave me alone!");
        creatures[msg.sender].happinessLvl+=5;
    }      

    function calculateStats() public {
        
    }
}