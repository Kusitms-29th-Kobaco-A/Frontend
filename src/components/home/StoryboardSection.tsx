const StoryboardSection = () => {
  return (
    <section className="flex h-[35rem] items-center justify-between">
      <div className="flex flex-1 flex-col items-start">
        <span className="text-lg font-semibold text-[#D33B4D]">04</span>
        <span className="font-semibold">
          아이디어를 더 생생하게 보여주고 싶을 땐
        </span>
        <h2 className="mt-12 text-4xl font-bold text-[#D33B4D]">
          스토리보드 제작
        </h2>
        <p className="mt-3 font-light leading-tight text-[#707887]">
          그림을 못 그려도 괜찮아요. 편집툴 사용을 못 해도 괜찮아요.
          <br />
          AI가 대신 그려주는 스토리보드 제작 서비스를 이용해보세요.
        </p>
        <button className="mt-12 rounded-md bg-[#D33B4D] px-12 py-2 font-semibold text-white">
          바로 가기
        </button>
      </div>
      <div className="flex justify-end">
        <img
          src="/images/home/designer-giving-a-keynote.svg"
          alt="디자이너가 발표하는 이미지"
          className="w-[25rem]"
        />
      </div>
    </section>
  );
};

export default StoryboardSection;
