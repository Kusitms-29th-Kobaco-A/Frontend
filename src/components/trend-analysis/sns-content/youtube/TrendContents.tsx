import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const TrendContents = () => {
  return (
    <TrendContentsBlock>
      <Heading>
        <span>케이크</span> 유튜브 트렌드 콘텐츠
      </Heading>
      <Description>
        검색한 키워드 기준 최근 30일 내 발행된 유튜브 인기 영상 콘텐츠를
        제공합니다.
      </Description>
      <div className="mt-6 flex gap-3">
        <WhiteRoundedBox>
          <IconWrapper>
            <i>
              <img src="/icons/youtube-play.svg" alt="유튜브 재생 아이콘" />
            </i>
            <span>영상</span>
          </IconWrapper>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div>
                <div key={index} className="overflow-hidden rounded">
                  <img
                    src="/images/posts/youtube-cake.png"
                    alt="유튜브 케이크 사진"
                  />
                </div>
                <div className="mt-1 flex flex-col">
                  <h3 className="font-semibold text-[#707887]">
                    감딸기를 따라잡을 수 있는 기회
                  </h3>
                  <span className="text-sm font-light text-[#707887]">
                    조회수 1,700만 회
                  </span>
                </div>
              </div>
            ))}
          </div>
        </WhiteRoundedBox>
        <WhiteRoundedBox>
          <IconWrapper>
            <i>
              <img src="/icons/youtube-shorts.svg" alt="유튜브 쇼츠 아이콘" />
            </i>
            <span>숏폼</span>
          </IconWrapper>
          <div className="mt-4 grid grid-cols-3 gap-3 px-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <img
                  src="/images/posts/shorts-cake.png"
                  alt="쇼츠 케이크 사진"
                />
              </div>
            ))}
          </div>
        </WhiteRoundedBox>
      </div>
      <ul className="mx-auto mt-6 flex w-full max-w-[30rem] items-center justify-between text-[#27272E]">
        <li>
          <i>
            <IoIosArrowBack />
          </i>
        </li>
        <li className="cursor-pointer text-[#27272E]">1</li>
        <li className="cursor-pointer text-[#707887]">2</li>
        <li className="cursor-pointer text-[#707887]">3</li>
        <li>
          <i>
            <IoIosArrowForward />
          </i>
        </li>
      </ul>
    </TrendContentsBlock>
  );
};

export default TrendContents;

const TrendContentsBlock = styled.div`
  margin-top: 4.5rem;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;

  span {
    color: #d33b4d;
  }
`;

const Description = styled.p`
  margin-top: 0.75rem;
  color: #a0a0a0;
  text-align: center;
`;

const WhiteRoundedBox = styled.div`
  flex: 1;
  background-color: white;
  padding: 1.5rem 1.75rem;
  border-radius: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  span {
    color: #707887;
    font-size: 0.875rem;
    font-weight: 700;
  }
`;
