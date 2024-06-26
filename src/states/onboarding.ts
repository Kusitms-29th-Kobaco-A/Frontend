import { atom } from 'recoil';

export const taStepState = atom({
  key: 'taStepState',
  default: 1,
});

export const taTotalStepState = atom({
  key: 'taTotalStepState',
  default: 5,
});

export const refStepState = atom({
  key: 'refStepState',
  default: 1,
});

export const refTotalStepState = atom({
  key: 'refTotalStepState',
  default: 3,
});
