import React, { useEffect, useState } from 'react';
import { abi, address } from '../config';
import { ethers } from 'ethers';

const Tamagochi = () => {
  const [readContract, setReadContract] = useState();
  const [writeContract, setWriteContract] = useState();
  const [giveCreatureName, setGiveCreatureName] = useState('');

  const [creatureName, setCreatureName] = useState('');
  const [creatureHungry, setCreatureHungry] = useState('');
  const [creatureHappyness, setCreatureHappyness] = useState('');

  useEffect(() => {
    if (readContract) return;

    const setupContract = async () => {
      const provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545');

      const rContract = new ethers.Contract(address, abi, provider);

      const signer = await provider.getSigner();
      const wContract = new ethers.Contract(address, abi, signer);

      setReadContract(rContract);
      setWriteContract(wContract);
    };

    setupContract();
  }, [readContract, writeContract]);

  const createCreature = async (name) => {
    try {
      const response = await writeContract.addTama(name);
      const tx = await response.wait();

      console.log(tx);

      return { success: true, goodNews: 'Gochi created' };
    } catch (error) {
      return { success: false, data: error.message };
    }
  };

  const getCreatureName = async () => {
    try {
      const name = await readContract.getMyCreatureName();

      setCreatureName(name);

      return { success: true, goodNews: 'It seems to work fine!' };
    } catch (error) {
      console.error('Error when fetching creature name:', error);
      return { success: false, data: error.message };
    }
  };

  const getHungerLevel = async () => {
    try {
      const hungeLvl = await readContract.getMyCreatureFoodLvl();

      setCreatureHungry(hungeLvl);

      return { success: true, goodNews: 'It seems to work fine!' };
    } catch (error) {
      console.error('Error when fetching creature name:', error);
      return { success: false, data: error.message };
    }
  };

  const feedCreature = async (foodType) => {
    try {
      const response = await writeContract.feedMyCreature(foodType);
      const tx = await response.wait();

      console.log(tx);

      return { success: true, goodNews: 'Creature feeded!' };
    } catch (error) {
      return { success: false, data: error.message };
    }
  };

  const getHappynessLevel = async () => {
    try {
      const happyLvl = await readContract.getMyCreatureHappinessLvl();

      setCreatureHappyness(happyLvl);

      return { success: true, goodNews: 'It seems to work fine!' };
    } catch (error) {
      console.error('Error when fetching creature name:', error);
      return { success: false, data: error.message };
    }
  };

  const playWithCreature = async () => {
    try {
      const response = await writeContract.playtime();
      const tx = await response.wait();

      console.log(tx);

      return { success: true, goodNews: 'Creature happier!' };
    } catch (error) {
      return { success: false, data: error.message };
    }
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          value={giveCreatureName}
          onChange={(e) => setGiveCreatureName(e.target.value)}
        />
      </form>
      <button onClick={() => createCreature(giveCreatureName)}>
        Create Tamagochi
      </button>
      <button onClick={() => getCreatureName()}>Get name</button>
      <button onClick={() => getHungerLevel()}>How hungry?</button>
      <button
        onClick={() => {
          feedCreature('Kibble');
        }}>
        Feed Kibble
      </button>
      <button onClick={() => getHappynessLevel()}>How happy?</button>
      <button onClick={() => playWithCreature()}>Play</button>

      {creatureName && <p>Name: {creatureName}</p>}
      {creatureHungry && <p>Hunger: {creatureHungry}</p>}
      {creatureHappyness && <p>Happyness: {creatureHappyness}</p>}
    </div>
  );
};

export default Tamagochi;
