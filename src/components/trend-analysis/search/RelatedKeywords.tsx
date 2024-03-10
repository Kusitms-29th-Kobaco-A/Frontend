import styled from 'styled-components';

interface Props {
  relatedKeywordList: string[];
}

const RelatedKeywords = ({ relatedKeywordList }: Props) => {
  if (relatedKeywordList.length === 0) {
    return <></>;
  }

  return (
    <RelatedKeywordsBlock>
      <div className="keyword-item">
        <span className="label">추천검색어</span>
        <span className="divider">|</span>
      </div>
      {relatedKeywordList.map((keyword, index) => (
        <div className="keyword-item" key={index}>
          <span className="keyword">{keyword}</span>
          {index < relatedKeywordList.length - 1 && (
            <span className="divider">|</span>
          )}
        </div>
      ))}
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
  margin-top: 1rem;

  .keyword-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .label {
      font-weight: 600;
    }

    .keyword {
      cursor: pointer;
    }

    .divider {
      font-size: 0.875rem;
    }
  }
`;
