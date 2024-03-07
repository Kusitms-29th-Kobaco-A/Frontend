const TrendAnalysisSection = () => {
  return (
    <section className="flex h-[35rem] items-center justify-between">
      <div className="flex flex-1 flex-col items-start">
        <span className="text-lg font-semibold text-[#D33B4D]">02</span>
        <span className="font-semibold">
          빠르게 변화하는 트렌드 속에서 살아남는 법
        </span>
        <h2 className="mt-12 text-4xl font-bold text-[#D33B4D]">트렌드 분석</h2>
        <p className="mt-3 font-light leading-tight text-[#707887]">
          최신 인기 트렌드를 한 눈에!
          <br />
          대시보드에서 검색어와 SNS 트렌드를 쉽고 빠르게 탐색하세요.
        </p>
        <button className="mt-12 rounded-md bg-[#D33B4D] px-12 py-2 font-semibold text-white">
          바로 가기
        </button>
      </div>
      <div className="flex justify-end">
        <img
          src="/images/home/training-employees.svg"
          alt="차트와 사람 이미지"
          className="w-[25rem]"
        />
      </div>
    </section>
  );
};

export default TrendAnalysisSection;
