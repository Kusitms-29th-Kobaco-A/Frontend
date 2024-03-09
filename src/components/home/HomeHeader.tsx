const HomeHeader = () => {
  return (
    <header className="items-between relative flex h-[calc(100vh-10.125rem)] snap-start flex-col justify-center overflow-hidden">
      <img
        src="/images/home/background-line.svg"
        alt="배경 선"
        className="absolute -top-[19rem] left-0 z-0 w-full brightness-[120%]"
      />
      <div className="relative z-10 mx-auto mb-32 w-[1024px]">
        <div className="flex items-center justify-between gap-4">
          <span className="text-lg font-semibold">눈길을 끄는 광고의 비밀</span>
          <hr className="h-[1px] flex-1 bg-[#C3C6CB]" />
          <p className="text-right text-sm font-semibold leading-tight text-[#373D49]">
            AI 기반 광고 창작 지원 서비스로
            <br />
            어려웠던 광고 제작을 쉽고 간단하게
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <h1 className="text-5xl font-bold">
            <span className="text-[#D33B4D]">AiSAC</span>이 도와드릴게요
          </h1>
          <button className="rounded-full bg-[#D33B4D] px-6 py-1.5 font-semibold text-white">
            AiSAC 시작하기
          </button>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
