import styled from 'styled-components';

const RelatedSection = () => {
  return (
    <WhiteRoundedBox>
      <Heading>
        <span>연관어</span> 트렌드
      </Heading>
      <Description>
        (언제부터 언제까지 검색된 연관어임을 알려야 하는 부분)
      </Description>
      <PlaceholderBubble>
        <img
          src="/images/graph-placeholder/bubble-placeholder.svg"
          alt="버블 차트 임시"
        />
      </PlaceholderBubble>
      <BottomText>연관된 검색어를 찾아보았어요. (워딩 수정)</BottomText>
    </WhiteRoundedBox>
  );
};

export default RelatedSection;

const WhiteRoundedBox = styled.div`
  height: 100%;
  background-color: white;
  padding: 2rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
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

const PlaceholderBubble = styled.div`
  color: #a0a0a0;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomText = styled.p`
  color: #707887;
  text-align: center;
`;
