import styled from 'styled-components';

const SNSSection = () => {
  return (
    <WhiteRoundedBox>
      <Heading>
        <span>소셜 미디어</span> 트렌드
      </Heading>
      <IconWrapper>
        <i>
          <img src="/icons/instagram-icon.svg" alt="인스타그램 아이콘" />
        </i>
        <span>인스타그램 게시글 업로드 현황 (워딩 수정)</span>
      </IconWrapper>
      <PlaceholderGraph>
        <img
          src="/images/graph-placeholder/line-graph-placeholder.svg"
          alt="꺾은선 그래프 임시"
        />
      </PlaceholderGraph>
    </WhiteRoundedBox>
  );
};

export default SNSSection;

const WhiteRoundedBox = styled.div`
  flex: 1;
  background-color: white;
  padding: 2rem 4rem;
  border-radius: 16px;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;

  span {
    color: #d33b4d;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  margin-top: 0.5rem;

  span {
    color: #a0a0a0;
  }
`;

const PlaceholderGraph = styled.div`
  color: #a0a0a0;
  width: 100%;
  height: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
