import { expect } from 'chai';
import { network } from 'hardhat';

const { ethers } = await network.connect();

describe('Tamagochi', () => {
  async function tamagotchiFixture() {
    const [owner] = await ethers.getSigners();

    const Tamagochi = await ethers.getContractFactory('Tamagochi');
    const tamagochi = await Tamagochi.deploy();

    return { tamagochi };
  }

  describe('Deploy contract', () => {
    it('should create a tamagochi', async () => {
      const { tamagochi } = await tamagotchiFixture();

      const name = 'Lille vän';
      await tamagochi.addTama(name);
      expect(await tamagochi.getMyCreature()).to.equal(name);
    });
  });
});
