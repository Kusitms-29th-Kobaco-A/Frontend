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
import { cakeData } from '../../data/cake';
import { vegonData } from '../../data/vegon';
import RelatedKeywords from '../../components/trend-analysis/search/RelatedKeywords';

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
  const [isSearchFixedFocused, setIsSearchFixedFocused] = useState(false);
  const [originalSearchKeyword, setOriginalSearchKeyword] = useState('');

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
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    if (taStep > totalTAStep) {
      setTAStep(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [taStep]);

  useEffect(() => {
    if (localStorage.getItem('ta-step-boarding') === null) {
      localStorage.setItem('ta-step-boarding', 'false');
      handleSearchSubmit();
    }
    if (localStorage.getItem('ta-step-boarding') === 'false') {
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
      setData(cakeData);
    } else if (searchKeyword === '비건') {
      setData(vegonData);
    } else {
      setData(null);
    }
    setOriginalSearchKeyword(searchKeyword);
    if (localStorage.getItem('ta-step-boarding') === 'true') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsSearchFixedFocused(false);
  };

  const isLoading = !data;

  return (
    <div className="min-h-[calc(100vh-10.125rem)] bg-[#F5F6F6] pb-[10rem]">
      <SearchTopFixed
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        handleSearchSubmit={handleSearchSubmit}
        isSearchFixedFocused={isSearchFixedFocused}
        setIsSearchFixedFocused={setIsSearchFixedFocused}
        originalSearchKeyword={originalSearchKeyword}
      />
      <main>
        <InnerArea>
          <SearchBar
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            handleSearchSubmit={handleSearchSubmit}
          />
          {originalSearchKeyword !== '케이크' &&
            originalSearchKeyword !== '비건' && (
              <div className="flex h-[calc(100vh-26rem)] flex-col items-center justify-center text-[#A0A0A0]">
                <img
                  src="/images/search/no-keyword.svg"
                  alt="입력된 검색어가 없습니다 이미지"
                />
                <div className="mt-2 text-2xl font-semibold">
                  검색된 키워드가 없어요.
                </div>
                <div className="mt-1">검색창에 키워드를 입력해보세요.</div>
              </div>
            )}
          {!isLoading && (
            <>
              <RelatedKeywords relatedKeywordList={data.relatedKeywordList} />
              <Dashboard
                relatedTrendBubble={data.relatedTrendBubble}
                genderAgeTrend={data.genderAgeTrend}
                snsTrend={data.snsTrend}
                searchKeyword={searchKeyword}
              />
              <section
                id="keyword-trend"
                className="scroll-mt-[18rem]"
                ref={keywordTrendRef}
              >
                <KeywordTrend
                  originalSearchKeyword={originalSearchKeyword}
                  data={data}
                />
                <KeywordDetailTrend
                  genderTrend={data.genderTrend}
                  ageTrend={data.ageTrend}
                  originalSearchKeyword={originalSearchKeyword}
                  data={data}
                />
              </section>
              <section
                id="related-trend"
                className="scroll-mt-[18rem]"
                ref={relatedTrendRef}
              >
                <RelatedKeyword
                  naverBubble={data.naverBubble}
                  googleBubble={data.googleBubble}
                  originalSearchKeyword={originalSearchKeyword}
                />
                <KeywordRank
                  keywordLank={data.keywordLank}
                  originalSearchKeyword={originalSearchKeyword}
                />
              </section>
              <section
                id="sns-trend"
                className="scroll-mt-[18rem]"
                ref={snsTrendRef}
              >
                <SNSContent
                  data={data}
                  originalSearchKeyword={originalSearchKeyword}
                />
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
