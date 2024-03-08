import clsx from 'clsx';
import styled from 'styled-components';

interface Props {
  youtubeHashTag: any;
}

const HashTagSection = ({ youtubeHashTag }: Props) => {
  const tagList = youtubeHashTag;

  return (
    <HashTagSectionBlock>
      <Heading>
        <span>케이크</span> 관련 유튜브 해시태그
      </Heading>
      <Description>
        유튜브 콘텐츠 대상 검색한 키워드와 연관이 있는 해시태그 키워드 상위
        20개를 제공합니다.
      </Description>
      <WhiteRoundedBox>
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
  padding: 3.5rem 2rem;
  border-radius: 16px;
  margin-top: 1.5rem;
`;

const TagList = styled.ul`
  display: flex;
  row-gap: 0.75rem;
  column-gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

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
