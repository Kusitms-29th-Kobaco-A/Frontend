const AdCopySection = () => {
  return (
    <section className="flex h-[35rem] items-center justify-between">
      <div className="flex flex-1 flex-col items-start">
        <span className="text-lg font-semibold text-[#D33B4D]">03</span>
        <span className="font-semibold">
          센스있는 광고 카피를 만들고 싶을 땐
        </span>
        <h2 className="mt-12 text-4xl font-bold text-[#D33B4D]">
          광고 카피 제작
        </h2>
        <p className="mt-3 font-light leading-tight text-[#707887]">
          원하는 조건에 맞춰 생성되는 AI 기반 광고 카피!
          <br />
          누구나 쉽게 만들 수 있는 광고 카피 제작 서비스를 체험하세요.
        </p>
        <button className="mt-12 rounded-md bg-[#D33B4D] px-12 py-2 font-semibold text-white">
          바로 가기
        </button>
      </div>
      <div className="flex justify-end">
        <img
          src="/images/home/social-media-discussion.svg"
          alt="소셜미디어 토론 이미지"
          className="w-[25rem]"
        />
      </div>
    </section>
  );
};

export default AdCopySection;
