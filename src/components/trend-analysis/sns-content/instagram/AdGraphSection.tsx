import styled from 'styled-components';

interface Props {
  instagramAd: any;
}

const AdGraphSection = ({ instagramAd }: Props) => {
  const data = instagramAd;

  return (
    <AdGraphSectionBlock>
      <Heading>
        <span>케이크</span> 게시글의 광고/비광고 비율
      </Heading>
      <Description>
        검색한 키워드가 들어간 인스타그램 인기 게시글 중 광고와 비광고의 비율을
        알려드립니다.
      </Description>
      <WhiteRoundedBox>
        <Legend>
          <LegendItem>
            <div className="color-box ad" />
            <span className="label">{data[0].xLabel}</span>
          </LegendItem>
          <LegendItem>
            <div className="color-box no-ad" />
            <span className="label">{data[1].xLabel}</span>
          </LegendItem>
        </Legend>
        <ChartContent>
          <BackgroundLine>
            <div className="rect">
              <span className="label">100%</span>
            </div>
            <div className="rect">
              <span className="label">80%</span>
            </div>
            <div className="rect">
              <span className="label">60%</span>
            </div>
            <div className="rect">
              <span className="label">40%</span>
            </div>
            <div className="rect">
              <span className="label">20%</span>
              <span className="bottom-label">0%</span>
              <hr className="bottom-line" />
            </div>
          </BackgroundLine>
          <ChartBarGroup>
            <ChartBar yPercent={20} color="#FD929F">
              <span className="top-label">{data[0].yValue}%</span>
              <div className="bar" />
              <span className="bottom-label">{data[0].xLabel}</span>
            </ChartBar>
            <ChartBar yPercent={80} color="#D33B4D">
              <span className="top-label">{data[1].yValue}%</span>
              <div className="bar" />
              <span className="bottom-label">{data[1].xLabel}</span>
            </ChartBar>
          </ChartBarGroup>
        </ChartContent>
      </WhiteRoundedBox>
    </AdGraphSectionBlock>
  );
};

export default AdGraphSection;

const AdGraphSectionBlock = styled.div`
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
  padding: 1.25rem 2rem;
  padding-bottom: 4rem;
  border-radius: 16px;
  margin-top: 1.5rem;
`;

const Legend = styled.div`
  display: flex;
  justify-content: end;
`;

const LegendItem = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;

  .color-box {
    width: 1rem;
    height: 1rem;
    border-radius: 4px;

    &.ad {
      background-color: #fd929f;
    }

    &.no-ad {
      background-color: #d33b4d;
    }
  }

  .label {
    color: #373d49;
    font-size: 0.875rem;
  }
`;

const ChartContent = styled.div`
  position: relative;
  margin: 0 auto;
  height: 15rem;
  width: 30rem;
`;

const BackgroundLine = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .rect {
    position: relative;
    flex: 1;
    border-top: 1px dashed #e6e6e6;
    width: 100%;
  }

  .label {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(calc(-100% - 0.5rem), -50%);
    font-size: 0.875rem;
    color: #bebebe;
  }

  .bottom-label {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(calc(-100% - 0.5rem), 50%);
    font-size: 0.875rem;
    color: #bebebe;
  }

  .bottom-line {
    position: absolute;
    bottom: 0;
    height: 1.5px;
    width: 100%;
    background-color: #bebebe;
  }
`;

const ChartBarGroup = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2.5rem;
`;

interface ChartBarProps {
  yPercent: number;
  color: string;
}

const ChartBar = styled.div<ChartBarProps>`
  position: relative;
  height: ${({ yPercent }) => yPercent}%;
  width: 3rem;

  .top-label {
    position: absolute;
    top: 0;
    width: 100%;
    transform: translateY(-100%);
    padding-bottom: 0.25rem;
    text-align: center;
    line-height: 1.25;
    color: ${({ color }) => color};
  }

  .bottom-label {
    position: absolute;
    bottom: 0;
    width: 100%;
    transform: translateY(100%);
    padding-top: 0.5rem;
    text-align: center;
    line-height: 1.25;
    color: #373d49;
  }

  .bar {
    height: 100%;
    width: 100%;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    background-color: ${({ color }) => color};
  }
`;
