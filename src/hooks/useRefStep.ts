import { useRecoilState, useRecoilValue } from 'recoil';

import { refStepState, refTotalStepState } from '../states/onboarding';

const useRefStep = () => {
  const [refStep, setRefStep] = useRecoilState(refStepState);
  const totalRefStep = useRecoilValue(refTotalStepState);

  const handleDismiss = () => {
    setRefStep(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { refStep, setRefStep, totalRefStep, handleDismiss };
};

export default useRefStep;
