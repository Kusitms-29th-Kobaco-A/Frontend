import clsx from 'clsx';
import styled from 'styled-components';

interface Props {
  youtubeHashTag: any;
  originalSearchKeyword: string;
}

const HashTagSection = ({ youtubeHashTag, originalSearchKeyword }: Props) => {
  const tagList = youtubeHashTag;

  return (
    <HashTagSectionBlock>
      <Heading>
        <span>{originalSearchKeyword}</span> 관련 유튜브 해시태그
      </Heading>
      <Description>
        유튜브 콘텐츠 대상 검색한 키워드와 연관이 있는 해시태그 키워드 상위
        20개를 제공합니다.
      </Description>
      <WhiteRoundedBox>
        <div className="flex justify-end">
          <Legend>
            <LegendItem>
              <div className="color-box high" />
              <span className="label">높은 빈도</span>
            </LegendItem>
            <LegendItem>
              <div className="color-box low" />
              <span className="label">낮은 빈도</span>
            </LegendItem>
          </Legend>
        </div>
        <TagList>
          {tagList.map(
            (tag: { name: string; isActive: boolean }, index: number) => (
              <li key={index} className={clsx({ active: tag.isActive })}>
                #{tag.name}
              </li>
            ),
          )}
        </TagList>
      </WhiteRoundedBox>
    </HashTagSectionBlock>
  );
};

export default HashTagSection;

const HashTagSectionBlock = styled.div`
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
  padding: 2rem 3rem;
  padding-bottom: 3rem;
  border-radius: 16px;
  margin-top: 1.5rem;
`;

const Legend = styled.div`
  display: flex;
  gap: 1rem;
`;

const LegendItem = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  .color-box {
    width: 1rem;
    height: 1rem;
    border-radius: 4px;

    &.high {
      background-color: #d33b4d;
    }

    &.low {
      background-color: #ffecee;
    }
  }

  .label {
    color: #373d49;
  }
`;

const TagList = styled.ul`
  display: flex;
  row-gap: 0.75rem;
  column-gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;

  li {
    padding: 0.5rem 1.5rem;
    border-radius: 9999px;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 140%;
    background-color: #f9f3f3;
    color: #d33b4d;

    &.active {
      background-color: #d33b4d;
      color: white;
    }
  }
`;
