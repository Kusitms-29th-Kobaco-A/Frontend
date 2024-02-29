import styled from 'styled-components';

import SearchBar from '../../components/trend-analysis/search/SearchBar';
import RelatedKeywords from '../../components/trend-analysis/search/RelatedKeywords';

const TAHome = () => {
  return (
    <main>
      <InnerArea>
        <SearchBar />
        <RelatedKeywords />
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
