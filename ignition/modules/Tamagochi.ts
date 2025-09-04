import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

export default buildModule('TamagochiModule', (m) => {
  const tamagochi = m.contract('Tamagochi');

  return { tamagochi };
});
