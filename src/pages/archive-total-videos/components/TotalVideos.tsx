/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from "react";
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
import "../../archive-main/components/paging.css";
import axios from "axios";

// 전체 광고 컴포넌트
const RecentPopularVideosTotal = () => {
  const token = localStorage.getItem("token");
  //페이징을 위한 page 변수선언
  const [page, setPage] = useState<number>(1);
  // 페이지 이동함수
  const handlePageChange = (page: number) => {
    setPage(page);
    console.log(page);
  };

  // 비디오리스트 저장하는 곳
  const [totalVideos, setTotalVideos] = useState<any>([]);

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

  // 추천 키워드에 있는 버튼 클릭 시 리스트에 추가
  const handleAddRecommendKeyword = (keyword: string = searchedKeyword) => {
    if (keyword.trim() !== "" && !keywordsArray.includes(keyword)) {
      setKeywordsArray((prevKeywords) => [...prevKeywords, keyword]);
      setSearchedKeyword(""); // 입력 필드 초기화
    }
  };

  // 선택된 드롭다운 value값
  const [selectedType, setSelectedType] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("최근등록순");

  const handleSelectType = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value; // 버튼의 value 속성 값 가져오기
    setSelectedType(value);
  };
  const handleSelectIndustry = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value; // 버튼의 value 속성 값 가져오기
    setSelectedIndustry(value);
  };
  const handleSelectOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOrder(e.target.value);
  };

  const [numberOfElements, setNumberOfElements] = useState<number>(0);

  // 여기서 한번에 모든 비디오 정보들 받음
  const getArchiveMainVideos = useCallback(async () => {
    const baseUrl = `https://dev.simproject.kr/api/advertises?page=${
      page - 1
    }&size=28`;

    // 키워드 배열을 쿼리 스트링으로 변환
    const keywordQueryString =
      keywordsArray.length > 0 ? `&keywordList=${keywordsArray.join(",")}` : "";

    // 선택된 타입이 있는 경우 쿼리 스트링에 추가
    const typeQueryString = selectedType ? `&keywordList=${selectedType}` : "";

    // 선택된 산업 분야가 있는 경우 쿼리 스트링에 추가
    const industryQueryString = selectedIndustry
      ? `&keywordList=${selectedIndustry}`
      : "";

    const orderName =
      selectedOrder === "최근등록순"
        ? "RECENT"
        : selectedOrder === "조회순"
        ? "VIEW"
        : "POPULAR";

    // 선택된 정렬 순서가 있는 경우 쿼리 스트링에 추가
    const orderQueryString = selectedOrder ? `&orderType=${orderName}` : "";

    // 최종 URL 구성
    const finalUrl =
      baseUrl +
      keywordQueryString +
      typeQueryString +
      industryQueryString +
      orderQueryString;
    try {
      await axios
        .get(finalUrl, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res: any) => {
          setTotalVideos(res.data.content);
          setNumberOfElements(res.data.totalElements);
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  }, [
    page,
    keywordsArray,
    selectedType,
    selectedIndustry,
    selectedOrder,
    token,
  ]);

  useEffect(() => {
    getArchiveMainVideos();
  }, [getArchiveMainVideos]);

  return (
    <TotalComponent>
      <TotalTopRowFlexComponent>
        <TotalTopLabel>전체 광고</TotalTopLabel>
      </TotalTopRowFlexComponent>
      <RowComponent style={{ marginTop: "33px" }}>
        <FilterLabel>컨셉</FilterLabel>

        {videoTypeList.map((item: any) => {
          if (selectedType === item.value) {
            return (
              <FilterAnsBox>
                <SelectedFilterAns
                  value={item.value}
                  onClick={handleSelectType}
                >
                  {item.label}
                </SelectedFilterAns>
              </FilterAnsBox>
            );
          } else {
            return (
              <FilterAnsBox>
                <FilterAns value={item.value} onClick={handleSelectType}>
                  {item.label}
                </FilterAns>
              </FilterAnsBox>
            );
          }
        })}
      </RowComponent>
      <RowComponent style={{ marginTop: "11px" }}>
        <FilterLabel>산업군</FilterLabel>
        {industryList.map((item: any) => {
          if (selectedIndustry === item.value) {
            return (
              <FilterAnsBox>
                <SelectedFilterAns
                  value={item.value}
                  onClick={handleSelectIndustry}
                >
                  {item.label}
                </SelectedFilterAns>
              </FilterAnsBox>
            );
          } else {
            return (
              <FilterAnsBox>
                <FilterAns value={item.value} onClick={handleSelectIndustry}>
                  {item.label}
                </FilterAns>
              </FilterAnsBox>
            );
          }
        })}
      </RowComponent>
      <RowComponent style={{ marginTop: "48px", height: "44px" }}>
        <TotalSearchInput
          value={searchedKeyword}
          onChange={handleInputChange}
          onKeyUp={handleKeyPress}
          placeholder="찾고 싶은 광고 컨셉 혹은 산업을 검색하세요"
        />
        <GlassImgBox src={glass} alt="glass" />
        <SearchBtn onClick={handleAddKeyword}>검색</SearchBtn>
      </RowComponent>
      <RowComponent style={{ margin: "20px 0px 0px 17px" }}>
        {keywordsArray.length <= 0 && <FilterLabel>추천 검색어</FilterLabel>}
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
              {recommendKeywordsList.map((keyword, index) => (
                <BasicKeyword
                  key={index}
                  onClick={() => handleAddRecommendKeyword(keyword)}
                >
                  #{keyword}
                </BasicKeyword>
              ))}
            </BasicKeywordsComponent>
          )}
        </KeywordsComponent>
      </RowComponent>

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
          itemsCountPerPage={28}
          totalItemsCount={numberOfElements}
          pageRangeDisplayed={3}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </div>
    </TotalComponent>
  );
};
export default RecentPopularVideosTotal;

const TotalComponent = styled.div`
  width: 100%;
  height: 100%;
`;

// 상단 sector
const TotalTopRowFlexComponent = styled.div`
  display: flex;
  align-items: center;
`;

const TotalTopLabel = styled.div`
  color: var(--Gray-9, #27272e);
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
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

// 키워드 부분
const KeywordsComponent = styled.div`
  display: flex;
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
  cursor: pointer;
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

const RowComponent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
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

const FilterLabel = styled.div`
  color: var(--Gray-9, #27272e);
  width: 129px;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;

const FilterAnsBox = styled.div`
  display: flex;
  justify-content: center;
  width: 116px;
`;

const FilterAns = styled.button`
  display: flex;
  height: 22px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: #fff;
  border: none;
`;
const SelectedFilterAns = styled.button`
  display: inline-flex;
  padding: 7px 15px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 18px;
  background: var(--Sub-2, #ffecee);
  color: var(--Main-1, #d33b4d);
  border: none;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;

const GlassImgBox = styled.img`
  position: absolute;
  left: 17px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;
