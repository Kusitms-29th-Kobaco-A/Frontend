import styled from 'styled-components';

import SearchBar from '../../components/trend-analysis/search/SearchBar';
import TADashboard from '../../components/trend-analysis/dashboard/TADashboard';
import KeywordTrend from '../../components/trend-analysis/keyword-trend/KeywordTrend';
import KeywordDetailTrend from '../../components/trend-analysis/keyword-detail-trend/KeywordDetailTrend';
import RelatedKeyword from '../../components/trend-analysis/related-keyword/RelatedKeyword';
import KeywordRank from '../../components/trend-analysis/keyword-rank/KeywordRank';

const TAHome = () => {
  return (
    <main>
      <InnerArea>
        <SearchBar />
        <TADashboard />
        <KeywordTrend />
        <KeywordDetailTrend />
        <RelatedKeyword />
        <KeywordRank />
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
