import { expect } from 'chai';
import { network } from 'hardhat';

const { ethers } = await network.connect();

describe('Tamagochi', () => {
  async function tamagotchiAuctionFixture() {
    const [owner] = await ethers.getSigners();

    const Tamagochi = await ethers.getContractFactory('Tamagochi');
    const tamagochi = await Tamagochi.deploy();

    return { tamagochi };
  }

  describe('Deploy contract', () => {
    it('', () => {});
  });
});
