import styled from 'styled-components';

import SearchBar from '../../components/trend-analysis/search/SearchBar';
import Dashboard from '../../components/trend-analysis/dashboard/Dashboard';
import KeywordTrend from '../../components/trend-analysis/keyword-trend/KeywordTrend';
import KeywordDetailTrend from '../../components/trend-analysis/keyword-detail-trend/KeywordDetailTrend';
import RelatedKeyword from '../../components/trend-analysis/related-keyword/RelatedKeyword';
import KeywordRank from '../../components/trend-analysis/keyword-rank/KeywordRank';
import SNSContent from '../../components/trend-analysis/sns-content/root/SNSContent';

const TAHome = () => {
  return (
    <main>
      <InnerArea>
        <SearchBar />
        <Dashboard />
        <KeywordTrend />
        <KeywordDetailTrend />
        <RelatedKeyword />
        <KeywordRank />
        <SNSContent />
      </InnerArea>
    </main>
  );
};

export default TAHome;

const InnerArea = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  width: 100%;
`;
