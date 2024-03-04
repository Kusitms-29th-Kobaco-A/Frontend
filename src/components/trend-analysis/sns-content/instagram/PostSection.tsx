import {
  Chart,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
);

const PostSection = () => {
  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        min: 0,
        max: 100,
      },
    },
    elements: {
      line: {
        tension: 0.3,
      },
      point: {
        radius: 0,
      },
    },
    ticks: {
      stepSize: 20,
    },
  };

  const graphData = {
    labels: [
      1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1,
    ],
    datasets: [
      {
        data: [
          80, 50, 40, 14, 40, 20, 80, 50, 10, 40, 50, 40, 20, 80, 10, 80, 20,
          20, 40, 10, 50, 50, 10, 80, 20,
        ],
        fill: true,
        backgroundColor: ({
          chart: { ctx },
        }: {
          chart: { ctx: CanvasRenderingContext2D };
        }) => {
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0.2, 'rgb(255, 159, 159)');
          gradient.addColorStop(0.9, 'rgba(255, 255, 255, 0)');
          return gradient;
        },
        borderColor: 'rgba(225,116,103)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <PostSectionBlock>
      <Heading>
        <span>케이크</span> 관련 인스타그램 게시글 현황
      </Heading>
      <Description>
        검색한 키워드 관련 인스타그램 콘텐츠 수, 게시글 내 키워드 분석 결과
        데이터를 제공합니다.
      </Description>
      <WhiteRoundedBoxGroup>
        <LeftWhiteRoundedBox>
          <BoxTop>
            <IconWrapper>
              <i>
                <img src="/icons/instagram.svg" alt="네이버 아이콘" />
              </i>
              <span>게시글 수</span>
            </IconWrapper>
            <TimeChoice>
              <li className="active">일간</li>
              <li>주간</li>
              <li>월간</li>
            </TimeChoice>
          </BoxTop>
          <LineWrapper>
            <Line
              width="100%"
              height="40rem"
              options={options}
              data={graphData}
            />
          </LineWrapper>
        </LeftWhiteRoundedBox>
        <RightWhiteRoundedBox>
          <IconWrapper>
            <i>
              <img src="/icons/search-icon.svg" alt="네이버 아이콘" />
            </i>
            <span>게시글 내 키워드 분석 결과</span>
          </IconWrapper>
          <DateLabel>
            <i>
              <img src="/icons/search-icon.svg" alt="검색 아이콘" />
            </i>
            <span className="date-text">2024-02-02~2024-02-02</span>
          </DateLabel>
          <KeywordList>
            <KeywordListItem active>01 케이크맛있어</KeywordListItem>
            <KeywordListItem>02 케이크맛있어</KeywordListItem>
            <KeywordListItem>02 케이크맛있어</KeywordListItem>
            <KeywordListItem>03 케이크맛있어</KeywordListItem>
            <KeywordListItem>04 케이크맛있어</KeywordListItem>
            <KeywordListItem>05 케이크맛있어</KeywordListItem>
          </KeywordList>
        </RightWhiteRoundedBox>
      </WhiteRoundedBoxGroup>
    </PostSectionBlock>
  );
};

export default PostSection;

const PostSectionBlock = styled.section`
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

const WhiteRoundedBoxGroup = styled.div`
  display: flex;
  gap: 1rem;
  height: 25rem;
`;

const LeftWhiteRoundedBox = styled.div`
  flex: 2;
  background-color: white;
  padding: 1.5rem 1.75rem;
  border-radius: 16px;
  margin-top: 1.5rem;
`;

const RightWhiteRoundedBox = styled.div`
  flex: 1;
  background-color: white;
  padding: 1.5rem 1.75rem;
  border-radius: 16px;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const BoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  span {
    color: #707887;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.25;
  }
`;

const TimeChoice = styled.ul`
  display: flex;
  background-color: #f4f6f6;
  padding: 0.25rem;
  border-radius: 0.5rem;
  height: 2.75rem;

  li {
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;

    &.active {
      background-color: white;
      border-radius: 0.625rem;
    }
  }
`;

const LineWrapper = styled.div`
  margin-top: 0.5rem;
`;

const DateLabel = styled.div`
  display: flex;
  align-items: start;
  gap: 2px;

  i {
    opacity: 0;
  }

  .date-text {
    font-size: 0.75rem; /* 12px */
    font-weight: 500;
    color: #bebebe;
  }
`;

const KeywordList = styled.ul`
  margin-top: 12px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
`;

interface KeywordListItemProps {
  active?: boolean;
}

const KeywordListItem = styled.li<KeywordListItemProps>`
  cursor: pointer;
  border-radius: 9999px;
  padding: 12px 20px;
  font-size: 1.25rem; /* 20px */
  font-weight: 500;
  line-height: 1.75rem; /* 28px */
  color: ${(props) => (props.active ? 'white' : '#707887')};
  background-color: ${(props) => (props.active ? '#D33B4D' : 'transparent')};
  transition:
    background-color 150ms,
    color 150ms;

  &:hover {
    background-color: #d33b4d;
    color: white;
  }
`;