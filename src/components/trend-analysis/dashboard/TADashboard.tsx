import styled from 'styled-components';

import RelatedSection from './RelatedSection';
import KeywordSection from './KeywordSection';
import SNSSection from './SNSSection';

const TADashboard = () => {
  return (
    <TADashboardBlock>
      <Left>
        <RelatedSection />
      </Left>
      <Right>
        <KeywordSection />
        <SNSSection />
      </Right>
    </TADashboardBlock>
  );
};

export default TADashboard;

const TADashboardBlock = styled.header`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: stretch;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
