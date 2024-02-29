/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import glass from "../../../assets/archive/Glass.svg";
import XImage from "../../../assets/archive/XImg.svg";

// 드롭다운 리스트 받아오기
import {
  industryList,
  recommendKeywordsList,
  videoOrderList,
  videoTypeList,
} from "../../../data/ArchiveData";

import SearchedTotalVideos from "./SearchedTotalVideos";

// 페이지네이션
import Pagination from "react-js-pagination";
import "./paging.css";

// 전체 광고 컴포넌트
const TotalVideo = ({ videos }: any) => {
  //비디오 받고 나중에 또 업데이트
  const [totalVideos, setTotalVideos] = useState(videos);

  // 키워드 검색후 리스트에 추가,삭제
  const [searchedKeyword, setSearchedKeyword] = useState<string>("");
  const [keywordsArray, setKeywordsArray] = useState<string[]>([]);

  // 검색어 바뀔경우
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedKeyword(event.target.value);
  };

  //키보드 누를 때 엔터인지 확인
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchedKeyword.trim() !== "") {
      handleAddKeyword();
    }
  };

  //X버튼 누를 때 지우기 확인
  const handleRemoveKeyword = (index: number) => {
    setKeywordsArray((prevKeywords) =>
      prevKeywords.filter((_, i) => i !== index)
    );
  };

  // 리스트에 추가
  const handleAddKeyword = () => {
    if (searchedKeyword.trim() !== "") {
      setKeywordsArray((prevKeywords) => [...prevKeywords, searchedKeyword]);
      setSearchedKeyword(""); // 입력 필드 초기화
    }
  };

  // 선택된 드롭다운 value값
  const [selectedType, setSelectedType] = useState("토픽 선택");
  const [selectedIndustry, setSelectedIndustry] = useState("산업군");
  const [selectedOrder, setSelectedOrder] = useState("최근 등록순");

  const handleSelectType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };
  const handleSelectIndustry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedIndustry(e.target.value);
  };
  const handleSelectOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOrder(e.target.value);
  };

  //페이징을 위한 page 변수선언
  const [page, setPage] = useState<number>(1);
  // 페이지 이동함수
  const handlePageChange = (page: number) => {
    setPage(page);
    console.log(page);
  };

  return (
    <TotalComponent>
      <TotalTopLabel>전체 광고</TotalTopLabel>

      {/* 검색 컴포넌트 */}
      <TotalSearchComponent>
        <TotalSearchComponentLeftDiv>
          <ContainInputDiv>
            <GlassImg src={glass} alt="glass" />
            <TotalSearchInput
              value={searchedKeyword}
              onChange={handleInputChange}
              onKeyUp={handleKeyPress}
              placeholder="찾고 싶은 광고 컨셉 혹은 산업을 검색하세요"
            />
          </ContainInputDiv>
          <SearchBtn onClick={handleAddKeyword}>검색</SearchBtn>
        </TotalSearchComponentLeftDiv>

        {/* 드롭다운 */}
        <TotalSearchComponentRightDiv>
          {/* 토픽 선택 드롭다운 */}
          <StyledSelectBackground
            margin="0px 15px 0px 0px"
            onChange={handleSelectType}
            value={selectedType}
          >
            <option value="토픽 선택" disabled>
              토픽 선택
            </option>
            {videoTypeList.map((item) => (
              <option
                style={{ width: "10px" }}
                value={item.value}
                key={item.value}
              >
                {item.label}
              </option>
            ))}
          </StyledSelectBackground>
          {/* 산업군 선택 드롭다운 */}
          <StyledSelectBackground
            onChange={handleSelectIndustry}
            value={selectedIndustry}
          >
            <option value="산업군" disabled>
              산업군
            </option>
            {industryList.map((item) => (
              <option
                style={{ width: "10px" }}
                value={item.value}
                key={item.value}
              >
                {item.label}
              </option>
            ))}
          </StyledSelectBackground>
        </TotalSearchComponentRightDiv>
      </TotalSearchComponent>

      {/* 키워드리스트 보여주는 부분 */}
      {/* 검색 키워드 입력시 키워드리스트, 없을 시 기본추천 키워드리스트 */}
      <KeywordsComponent>
        {keywordsArray.length > 0 ? (
          <SearchedKeywordsComponent>
            {keywordsArray.map((item, index) => {
              return (
                <ContainSearchedKeywordDiv key={index}>
                  <SearchedKeyword>#{item}</SearchedKeyword>
                  <XImg
                    onClick={() => handleRemoveKeyword(index)}
                    src={XImage}
                    alt="X"
                  />
                </ContainSearchedKeywordDiv>
              );
            })}
          </SearchedKeywordsComponent>
        ) : (
          <BasicKeywordsComponent>
            {recommendKeywordsList.map((item) => {
              return <BasicKeyword>#{item}</BasicKeyword>;
            })}
          </BasicKeywordsComponent>
        )}
      </KeywordsComponent>

      {/* 동영상 보여주는 기준 설정 드롭다운 */}
      <RecentRegisteredComponent>
        <StyledSelectNotBackground
          onChange={handleSelectOrder}
          value={selectedOrder}
        >
          {videoOrderList.map((item) => (
            <option
              style={{ width: "10px" }}
              value={item.value}
              key={item.value}
            >
              {item.label}
            </option>
          ))}
        </StyledSelectNotBackground>
      </RecentRegisteredComponent>

      {/* 동영상 리스트들 보내줘서 보내주기 */}
      <SearchedTotalVideos videos={totalVideos} />
      {/* 페이지 처리 부분 */}
      {/* 이후 아이템 개수 받아와서 바꿔주기 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "14px",
        }}
      >
        <Pagination
          activePage={page}
          itemsCountPerPage={20}
          totalItemsCount={139}
          pageRangeDisplayed={3}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </div>
    </TotalComponent>
  );
};
export default TotalVideo;

const TotalComponent = styled.div`
  width: 100%;
  height: 100%;
`;

// 상단 sector
const TotalTopLabel = styled.div`
  color: var(--Gray-9, #27272e);
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

//검색 부분
const TotalSearchComponent = styled.div`
  display: flex;
  position: relative;
  margin: 41px 0px 0px 0px;
  width: 100%;
  height: 44px;
`;

const TotalSearchComponentLeftDiv = styled.div`
  display: flex;
`;
const TotalSearchComponentRightDiv = styled.div`
  position: absolute;
  right: 0;
  display: flex;
`;

const ContainInputDiv = styled.div`
  position: relative;
`;

const GlassImg = styled.img`
  position: absolute;
  top: 11px;
  left: 17px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  object-fit: cover;
`;

const TotalSearchInput = styled.input`
  padding-left: 49px;
  width: 359px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--Gray-1, #f4f6f6);
  color: var(--Gray-7, #707887);
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%;
  letter-spacing: -0.4px;
  outline: none;
  border: none;
`;

const SearchBtn = styled.button`
  margin-left: 12px;
  display: inline-flex;
  padding: 8px 21px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--Main-1, #d33b4d);
  border: none;
  color: var(--White-1, #fff);

  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

// 드롭다운 부분
// 스타일드 컴포넌트로 select 스타일 정의
const StyledSelectBackground = styled.select<{ margin?: any }>`
  display: inline-flex;
  padding: 10px 10px 10px 20px;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background: var(--Gray-1, #f4f6f6);
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%;
  letter-spacing: -0.4px;
  border: none;
  outline: none;
  margin: ${(props) => props.margin || "0px"};
`;

// 키워드 부분
const KeywordsComponent = styled.div`
  display: flex;
  margin-top: 21px;
  width: 100%;
  height: 26px;
`;

// 기본 추천 키워드
const BasicKeywordsComponent = styled.div`
  display: flex;
  height: 26px;
`;
const BasicKeyword = styled.div`
  margin: 0px 3px;
  display: inline-flex;
  padding: 3px 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  background: var(--Main-1, #d33b4d);
  color: var(--White-1, #fff);
  text-align: center;

  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

// 내가 입력한 키워드
const SearchedKeywordsComponent = styled.div`
  display: flex;
  height: 26px;
`;

const ContainSearchedKeywordDiv = styled.div`
  margin: 0px 3px;
  display: inline-flex;
  padding: 3px 3px 3px 10px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 20px;
  border: 1px solid var(--Main-1, #d33b4d);
  background: var(--White-1, #fff);
  color: var(--Main-1, #d33b4d);
  text-align: center;
`;

const SearchedKeyword = styled.div`
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const XImg = styled.img`
  width: 16px;
  height: 16px;
  object-fit: cover;
`;

// 드롭다운
const RecentRegisteredComponent = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
`;

const StyledSelectNotBackground = styled.select<{ margin?: any }>`
  position: absolute;
  right: 0;
  display: inline-flex;
  padding: 10px 10px 10px 20px;
  gap: 8px;
  border-radius: 8px;
  color: var(--Gray-9, #27272e);
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
  border: none;
  outline: none;
  margin: ${(props) => props.margin || "0px"};
`;
