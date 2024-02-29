import styled from 'styled-components';

const RelatedKeywords = () => {
  return (
    <RelatedKeywordsBlock>
      <span className="label">연관검색어</span>
      <span>|</span>
      <span className="keyword">맛있는생크림케이크만드는</span>
      <span>|</span>
      <span className="keyword">초코케이크망함</span>
      <span>|</span>
      <span className="keyword">블루베리케이크</span>
      <span>|</span>
      <span className="keyword">강아지케이크먹어도</span>
      <span>|</span>
      <span className="keyword">식물성생크림맛</span>
    </RelatedKeywordsBlock>
  );
};

export default RelatedKeywords;

const RelatedKeywordsBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  color: #707887;
  font-weight: 300;

  .label {
    font-weight: 600;
  }

  .keyword {
    cursor: pointer;
  }
`;
