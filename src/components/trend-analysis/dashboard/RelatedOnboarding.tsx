import { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  isVisible?: boolean;
  currentStep: number;
  totalStep: number;
  onConfirm?: () => void;
  onDismiss?: () => void;
}

const RelatedOnboarding = ({
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
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isVisible]);

  if (!isVisible) return <>{children}</>;

  return (
    <div className="h-full scroll-mt-[calc(16rem)]" ref={scrollRef}>
      <div className="fixed left-0 top-0 z-40 h-full w-full overflow-x-auto bg-black bg-opacity-50" />
      <div className="relative z-50 flex h-full items-center justify-center">
        {children}
        <div className="absolute -right-6 top-16 mx-auto w-60 translate-x-full rounded-xl bg-[#D33B4D] px-4 py-3 text-white">
          <div
            className="absolute left-0 top-1/2 h-6 w-4 -translate-x-full -translate-y-1/2 bg-[#D33B4D]"
            style={{ clipPath: 'polygon(100% 100%, 0 50%, 100% 0)' }}
          />
          <h2 className="text-xs">
            Step {currentStep}/{totalStep}
          </h2>
          <p className="mt-2 text-sm font-bold">
            검색어와 관련된 연관 검색어에
            <br />
            대한 정보를 알아볼 수 있어요.
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

export default RelatedOnboarding;
