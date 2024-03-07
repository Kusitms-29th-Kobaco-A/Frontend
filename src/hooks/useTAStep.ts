import { useRecoilState, useRecoilValue } from 'recoil';

import { taStepState, taTotalStepState } from '../states/onboarding';

const useTAStep = () => {
  const [taStep, setTAStep] = useRecoilState(taStepState);
  const totalTAStep = useRecoilValue(taTotalStepState);

  const handleDismiss = () => {
    setTAStep(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { taStep, setTAStep, totalTAStep, handleDismiss };
};

export default useTAStep;
