import { Link } from 'react-router-dom';

const ReferenceSection = () => {
  return (
    <section className="mx-auto flex h-[calc(100vh-10.125rem)] w-[1024px] snap-start items-center justify-center">
      <div className="flex flex-1 flex-col items-start">
        <span className="text-lg font-semibold text-[#D33B4D]">01</span>
        <span className="font-semibold">
          반짝이는 광고 아이디어를 얻고 싶을 땐
        </span>
        <h2 className="mt-12 text-4xl font-bold text-[#D33B4D]">
          레퍼런스 탐색
        </h2>
        <p className="mt-3 font-light leading-tight text-[#707887]">
          트렌드 광고부터 최근 인기있는 영상까지 한 번에!
          <br />
          광고 레퍼런스를 탐색하고 반짝이는 아이디어를 얻으세요.
        </p>
        <Link
          to="/archive"
          className="mt-12 rounded-md bg-[#D33B4D] px-12 py-2 font-semibold text-white"
        >
          바로 가기
        </Link>
      </div>
      <div className="flex justify-end">
        <img
          src="/images/home/team-brainstorming.svg"
          alt="팀 브레인스토밍 이미지"
          className="w-[25rem]"
        />
      </div>
    </section>
  );
};

export default ReferenceSection;
