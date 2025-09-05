import { expect } from 'chai';
import { network } from 'hardhat';

const { ethers } = await network.connect();

describe('Tamagochi', () => {
  async function tamagotchiFixture() {
    const Tamagochi = await ethers.getContractFactory('Tamagochi');
    const tamagochi = await Tamagochi.deploy();

    return { tamagochi };
  }

  describe('Deploy contract', () => {
    it('should create a tamagochi', async () => {
      const { tamagochi } = await tamagotchiFixture();

      const name = 'Lille vän';
      await tamagochi.addTama(name);
      expect(await tamagochi.getMyCreatureName()).to.equal(name);
    });
  });

  describe('Feed creature', () => {
    it('should feed the tamagochi and increase its foodLvl', async () => {
      const { tamagochi } = await tamagotchiFixture();

      await tamagochi.addTama('Pelle');

      const foodLvlBefore = await tamagochi.getMyCreatureFoodLvl();
      await tamagochi.feedMyCreature('Steak');

      const foodLvlAfter = await tamagochi.getMyCreatureFoodLvl();

      expect(foodLvlBefore).to.be.lessThan(foodLvlAfter);
    });
  });

  describe('Playtime', () => {
    it('should increase its happinessLvl when playing', async () => {
      const { tamagochi } = await tamagotchiFixture();
      await tamagochi.addTama('Evert');

      const happinessLvlBefore = await tamagochi.getMyCreatureHappinessLvl();
      await tamagochi.playtime();

      const happinessLvlAfter = await tamagochi.getMyCreatureHappinessLvl();

      expect(happinessLvlBefore).to.be.lessThan(happinessLvlAfter);
    });
  });

  describe('attemptAdvance', () => {
    it('should level up charachter', async () => {
      const { tamagochi } = await tamagotchiFixture();
      await tamagochi.addTama('Evert');
      const beforeStage = await tamagochi.getCreatureStage();

      for (let i = 0; i < 100; i++) {
        await tamagochi.playtime();
        await tamagochi.feedMyCreature('Kibble');
      }
      await tamagochi.attemptAdvancement();
      const afterStage = await tamagochi.getCreatureStage();

      expect(beforeStage).to.not.equal(afterStage);
    });
  });
});
