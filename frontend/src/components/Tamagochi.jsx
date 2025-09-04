import React, { useEffect, useState } from 'react';
import { abi, address } from '../config';
import { ethers } from 'ethers';

const Tamagochi = () => {
  const [readContract, setReadContract] = useState();
  const [writeContract, setWriteContract] = useState();
  const [creatureName, setCreatureName] = useState('');
  const [giveCreatureName, setGiveCreatureName] = useState('');

  useEffect(() => {
    if (readContract) return;

    const setupContract = async () => {
      const provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545');

      const rContract = new ethers.Contract(address, abi, provider);

      const signer = await provider.getSigner();
      const wContract = new ethers.Contract(address, abi, signer);

      setReadContract(rContract);
      setWriteContract(wContract);
      [readContract, writeContract];
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
      const name = await readContract.getMyCreature();
      console.log('Creature name:', name);
      setCreatureName(name);

      return { success: true, goodNews: 'Gochi name!' };
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
      {creatureName && <p>{creatureName}</p>}
    </div>
  );
};

export default Tamagochi;
