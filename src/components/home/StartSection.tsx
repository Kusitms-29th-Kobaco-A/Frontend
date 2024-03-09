const StartSection = () => {
  return (
    <div className="relative z-10 flex h-[calc(100vh-10.125rem)] w-full snap-start flex-col items-center justify-center gap-8 bg-[#373D49]">
      <img
        src="/images/home/background-circle.svg"
        alt="배경 원형 디자인"
        className="absolute bottom-0 right-0 z-10 translate-x-[2rem] translate-y-[4rem]"
      />
      <div className="z-20 text-center text-5xl font-bold leading-[140%] text-white">
        <span className="text-[#D33B4D]">
          신개념 Ai 광고 제작 서비스
          <br />
          AiSAC
        </span>
        을 이용해보세요.
      </div>
      <button className="rounded-full bg-[#D33B4D] px-6 py-2 font-semibold text-white">
        AiSAC 시작하기
      </button>
    </div>
  );
};

export default StartSection;
