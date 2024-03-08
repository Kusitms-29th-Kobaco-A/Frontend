/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

import SearchBar from '../../components/trend-analysis/search/SearchBar';
import Dashboard from '../../components/trend-analysis/dashboard/Dashboard';
import KeywordTrend from '../../components/trend-analysis/keyword-trend/KeywordTrend';
import KeywordDetailTrend from '../../components/trend-analysis/keyword-detail-trend/KeywordDetailTrend';
import RelatedKeyword from '../../components/trend-analysis/related-keyword/RelatedKeyword';
import KeywordRank from '../../components/trend-analysis/keyword-rank/KeywordRank';
import SNSContent from '../../components/trend-analysis/sns-content/root/SNSContent';
import SearchTopFixed from '../../components/trend-analysis/search/SearchTopFixed';
import useTAStep from '../../hooks/useTAStep';
import axios from 'axios';

const TAHome = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { taStep, totalTAStep, setTAStep } = useTAStep();

  const keywordTrendRef = useRef<HTMLDivElement>(null);
  const relatedTrendRef = useRef<HTMLDivElement>(null);
  const snsTrendRef = useRef<HTMLDivElement>(null);

  const [searchKeyword, setSearchKeyword] = useState(
    localStorage.getItem('ta-step-boarding') !== 'true' ? '케이크' : '',
  );
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const scrollToMission = searchParams.get('scroll_to');
    if (scrollToMission) {
      if (scrollToMission === 'keyword-trend' && keywordTrendRef.current) {
        keywordTrendRef.current.scrollIntoView({ behavior: 'smooth' });
        setSearchParams({}, { replace: true });
      } else if (
        scrollToMission === 'related-trend' &&
        relatedTrendRef.current
      ) {
        relatedTrendRef.current.scrollIntoView({ behavior: 'smooth' });
        setSearchParams({}, { replace: true });
      } else if (scrollToMission === 'sns-trend' && snsTrendRef.current) {
        snsTrendRef.current.scrollIntoView({ behavior: 'smooth' });
        setSearchParams({}, { replace: true });
      }
    }
  }, [searchParams]);

  useEffect(() => {
    if (localStorage.getItem('ta-step-boarding') === null) {
      localStorage.setItem('ta-step-boarding', 'false');
      handleSearchSubmit();
    }
    if (localStorage.getItem('ta-step-boarding') === 'true') {
      document.body.style.overflow = 'auto';
      setTAStep(0);
      return;
    }
    if (taStep === 0 || taStep > totalTAStep) {
      document.body.style.overflow = 'auto';
      localStorage.setItem('ta-step-boarding', 'true');
    } else {
      document.body.style.overflow = 'hidden';
      localStorage.setItem('ta-step-boarding', 'false');
    }
  }, [taStep, totalTAStep]);

  const handleSearchSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchKeyword === '케이크') {
      const res = await axios.get('/src/data/cake.json');
      setData(res.data);
    } else if (searchKeyword === '비건') {
      const res = await axios.get('/src/data/vegon.json');
      setData(res.data);
    } else {
      setData(null);
    }
  };

  const isLoading = !data;

  return (
    <div className="min-h-[calc(100vh-10.125rem)] bg-[#F5F6F6] pb-[10rem]">
      <SearchTopFixed searchKeyword={searchKeyword} />
      <main>
        <InnerArea>
          <SearchBar
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            handleSearchSubmit={handleSearchSubmit}
            isLoading={isLoading}
          />
          {!isLoading && (
            <>
              <Dashboard
                relatedTrendBubble={data.relatedTrendBubble}
                genderAgeTrend={data.genderAgeTrend}
                snsTrend={data.snsTrend}
              />
              <section
                id="keyword-trend"
                className="scroll-mt-[16rem]"
                ref={keywordTrendRef}
              >
                <KeywordTrend searchTrend={data.searchTrend} />
                <KeywordDetailTrend
                  genderTrend={data.genderTrend}
                  ageTrend={data.ageTrend}
                />
              </section>
              <section
                id="related-trend"
                className="scroll-mt-[16rem]"
                ref={relatedTrendRef}
              >
                <RelatedKeyword
                  naverBubble={data.naverBubble}
                  googleBubble={data.googleBubble}
                />
                <KeywordRank keywordLank={data.keywordLank} />
              </section>
              <section
                id="sns-trend"
                className="scroll-mt-[16rem]"
                ref={snsTrendRef}
              >
                <SNSContent data={data} />
              </section>
            </>
          )}
        </InnerArea>
      </main>
    </div>
  );
};

export default TAHome;

const InnerArea = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  width: 100%;
`;
