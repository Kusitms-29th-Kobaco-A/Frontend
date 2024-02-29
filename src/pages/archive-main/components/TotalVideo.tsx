/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import glass from "../../../assets/archive/Glass.svg";
import XImage from "../../../assets/archive/XImg.svg";
import { useState } from "react";
import {
  industryList,
  recommendKeywordsList,
  videoOrderList,
  videoTypeList,
} from "../../../data/ArchiveData";
import SearchedTotalVideos from "./SearchedTotalVideos";

const TotalVideo = ({ totalVideos }: any) => {
  const [searchedKeyword, setSearchedKeyword] = useState<string>("");
  const [keywordsArray, setKeywordsArray] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedKeyword(event.target.value);
  };

  const handleAddKeyword = () => {
    if (searchedKeyword.trim() !== "") {
      setKeywordsArray((prevKeywords) => [...prevKeywords, searchedKeyword]);
      setSearchedKeyword(""); // 입력 필드 초기화
    }
  };

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
  return (
    <TotalComponent>
      <TotalTopLabel>전체 광고</TotalTopLabel>
      <TotalSearchComponent>
        <TotalSearchComponentLeftDiv>
          <ContainInputDiv>
            <GlassImg src={glass} alt="glass" />
            <TotalSearchInput
              value={searchedKeyword}
              onChange={handleInputChange}
              placeholder="찾고 싶은 광고 컨셉 혹은 산업을 검색하세요"
            />
          </ContainInputDiv>
          <SearchBtn onClick={handleAddKeyword}>검색</SearchBtn>
        </TotalSearchComponentLeftDiv>
        <TotalSearchComponentRightDiv>
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
      <KeywordsComponent>
        <BasicKeywordsComponent>
          {recommendKeywordsList.map((item) => {
            return <BasicKeyword>#{item}</BasicKeyword>;
          })}
        </BasicKeywordsComponent>

        <SearchedKeywordsComponent>
          {keywordsArray.map((item) => {
            return (
              <ContainSearchedKeywordDiv>
                <SearchedKeyword>#{item}</SearchedKeyword>
                <XImg src={XImage} alt="X" />
              </ContainSearchedKeywordDiv>
            );
          })}
        </SearchedKeywordsComponent>

        {/* {keywordsArray.length > 0 ? (
          <SearchedKeywordsComponent></SearchedKeywordsComponent>
        ) : (
          <BasicKeywordsComponent></BasicKeywordsComponent>
        )} */}
      </KeywordsComponent>
      <RecentRegisteredComponent>
        <StyledSelectNotBackground
          onChange={handleSelectOrder}
          value={selectedOrder}
        >
          {industryList.map((item) => (
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
      <SearchedTotalVideos videos={totalVideos} />
    </TotalComponent>
  );
};
export default TotalVideo;

const TotalComponent = styled.div`
  width: 100%;
  height: 100%;
`;

const TotalTopLabel = styled.div`
  color: var(--Gray-9, #27272e);
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.4px;
`;
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
  line-height: 140%; /* 22.4px */
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
  line-height: 140%; /* 28px */
  letter-spacing: -0.4px;
`;

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
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  border: none;
  outline: none;
  margin: ${(props) => props.margin || "0px"};
`;

const KeywordsComponent = styled.div`
  display: flex;
  margin-top: 21px;
  width: 100%;
  height: 26px;
`;

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
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.4px;
`;

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
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.4px;
`;

const XImg = styled.img`
  width: 16px;
  height: 16px;
  object-fit: cover;
`;

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
  /* Body/4 */
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  border: none;
  outline: none;
  margin: ${(props) => props.margin || "0px"};
`;
