import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const TrendContents = () => {
  return (
    <TrendContentsBlock>
      <Heading>
        <span>케이크</span> 인스타그램 트렌드 콘텐츠
      </Heading>
      <Description>
        검색한 키워드 기준 최근 30일 내 발행된 인스타그램 인기 영상 콘텐츠를
        제공합니다.
      </Description>
      <WhiteRoundedBox>
        <div className="grid grid-cols-5 gap-5">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="overflow-hidden rounded">
              <img
                src="/images/posts/instagram-cake.png"
                alt="인스타그램 케이크 사진"
              />
            </div>
          ))}
        </div>
      </WhiteRoundedBox>
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
  padding: 2.75rem 3.5rem;
  border-radius: 16px;
  margin-top: 1.5rem;
`;
