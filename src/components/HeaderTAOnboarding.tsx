import { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  isVisible?: boolean;
  currentStep: number;
  totalStep: number;
  onConfirm?: () => void;
  onDismiss?: () => void;
}

const HeaderTAOnboarding = ({
  children,
  isVisible = true,
  currentStep,
  totalStep,
  onConfirm,
  onDismiss,
}: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isVisible]);

  if (!isVisible) return <>{children}</>;

  return (
    <div className="h-full scroll-mt-[calc(16rem)]" ref={scrollRef}>
      <div className="fixed left-0 top-0 z-40 h-full w-full overflow-x-auto bg-black bg-opacity-50" />
      <div className="relative z-50 flex h-full items-center justify-center">
        {children}
        <div className="absolute bottom-0 mx-auto w-60 translate-y-full rounded-xl bg-[#D33B4D] px-4 py-3 text-white">
          <div
            className="absolute left-1/2 top-0 h-4 w-6 -translate-x-1/2 -translate-y-full bg-[#D33B4D]"
            style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}
          />
          <h2 className="text-xs">
            Step {currentStep}/{totalStep}
          </h2>
          <p className="mt-2 text-sm font-bold">
            트렌드분석에 오신 걸 환영합니다!
            <br />
            분석 단계에 대해 알려드릴게요.
          </p>
          <div className="mt-2 flex items-center justify-between">
            <button className="text-xs" onClick={onDismiss}>
              다시 보지 않기
            </button>
            <button
              className="rounded-full bg-white px-2 py-0.5 text-xs font-bold text-[#D33B4D]"
              onClick={onConfirm}
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTAOnboarding;
