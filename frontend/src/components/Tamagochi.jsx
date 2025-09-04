import React, { useEffect, useState } from 'react';
import { abi, address } from '../config';
import { ethers } from 'ethers';

const Tamagochi = () => {
  const [readContract, setReadContract] = useState();
  const [writeContract, setWriteContract] = useState();

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

  console.log();

  return <div></div>;
};

export default Tamagochi;
