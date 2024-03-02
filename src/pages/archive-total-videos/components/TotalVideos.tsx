/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import glass from "../../../assets/archive/Glass.svg";
import XImage from "../../../assets/archive/XImg.svg";
import questionImg from "../../../assets/archive/Question.svg";

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

// 전체 광고 컴포넌트
const RecentPopularVideosTotal = () => {
  // 비디오리스트 저장하는 곳
  const [totalVideos, setTotalVideos] = useState<any>([]);

  // 여기서 한번에 모든 비디오 정보들 받음
  const getArchiveMainVideos = useCallback(async () => {
    try {
      setTotalVideos([
        {
          advertiseId: 1,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          title: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 2,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          title:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 3,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          title: "빵빵이의 옥지 사용법 ~!",
          advertiseTime: "02:49",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 4,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          title:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          advertiseTime: "40:32",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 5,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          title: "빵빵이의 옥지 사용법 ~!",
          advertiseTime: "02:49",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 6,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          title:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          advertiseTime: "40:32",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 7,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          title: "빵빵이의 옥지 사용법 ~!",
          advertiseTime: "02:49",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 8,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          title:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          advertiseTime: "40:32",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 9,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          title: "빵빵이의 옥지 사용법 ~!",
          advertiseTime: "02:49",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 10,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          title:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          advertiseTime: "40:32",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 11,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          title: "빵빵이의 옥지 사용법 ~!",
          advertiseTime: "02:49",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 12,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          title:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          advertiseTime: "40:32",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 13,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          title: "빵빵이의 옥지 사용법 ~!",
          advertiseTime: "02:49",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 14,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          title:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          advertiseTime: "40:32",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 15,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          title: "빵빵이의 옥지 사용법 ~!",
          advertiseTime: "02:49",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 16,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          title:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          advertiseTime: "40:32",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 17,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          title: "빵빵이의 옥지 사용법 ~!",
          advertiseTime: "02:49",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 18,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          title:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          advertiseTime: "40:32",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 19,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          title: "빵빵이의 옥지 사용법 ~!",
          advertiseTime: "02:49",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 20,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          title:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          advertiseTime: "40:32",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 21,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          title: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 22,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          title:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 23,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          title: "빵빵이의 옥지 사용법 ~!",
          advertiseTime: "02:49",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 24,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          title:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          advertiseTime: "40:32",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 25,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          title: "빵빵이의 옥지 사용법 ~!",
          advertiseTime: "02:49",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 26,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          title:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          advertiseTime: "40:32",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 27,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          title: "빵빵이의 옥지 사용법 ~!",
          advertiseTime: "02:49",
          keywordList: ["커피", "유머있는"],
        },
        {
          advertiseId: 28,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          title:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          advertiseTime: "40:32",
          keywordList: ["커피", "유머있는"],
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getArchiveMainVideos();
  }, [getArchiveMainVideos]);

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
  const [selectedOrder, setSelectedOrder] = useState("최근 등록순");

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

  //페이징을 위한 page 변수선언
  const [page, setPage] = useState<number>(1);
  // 페이지 이동함수
  const handlePageChange = (page: number) => {
    setPage(page);
    console.log(page);
  };

  return (
    <TotalComponent>
      <TotalTopRowFlexComponent>
        <TotalTopLabel>전체 광고</TotalTopLabel>
      </TotalTopRowFlexComponent>

      <TotalFilterComponent>
        <RowComponent style={{ height: "62px" }}>
          <FilterLabel>컨셉</FilterLabel>
          {videoTypeList.map((item: any) => {
            return (
              <FilterAns value={item.value} onClick={handleSelectType}>
                {item.label}
              </FilterAns>
            );
          })}
        </RowComponent>
        <DottedLine />
        <RowComponent style={{ height: "68px" }}>
          <FilterLabel>산업군</FilterLabel>
          {industryList.map((item: any) => {
            return (
              <FilterAns value={item.value} onClick={handleSelectIndustry}>
                {item.label}
              </FilterAns>
            );
          })}
        </RowComponent>
        <DottedLine />
        <RowComponent style={{ marginTop: "15px", height: "44px" }}>
          <FilterLabel>검색</FilterLabel>
          <TotalSearchInput
            value={searchedKeyword}
            onChange={handleInputChange}
            onKeyUp={handleKeyPress}
            placeholder="찾고 싶은 광고 컨셉 혹은 산업을 검색하세요"
          />
          <SearchBtn onClick={handleAddKeyword}>검색</SearchBtn>
        </RowComponent>
        <RowComponent style={{ margin: "15px 0px 0px 169px" }}>
          <FilterLabel>추천 검색어</FilterLabel>
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
      </TotalFilterComponent>

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

const TotalTopQuestionImgBox = styled.img`
  margin: 0px 0px 0px 12px;
  width: 23px;
  height: 23px;
  flex-shrink: 0;
  fill: var(--Gray-3, #bebebe);
`;
const TooltipComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  fill: var(--Gray-8, #373d49);
  color: var(--Gray-1, #f4f6f6);
  text-align: center;

  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
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
  padding-left: 76.98px;
  width: 641px;
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
  margin-left: 17px;
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
`;

const TotalFilterComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 19px 0px 0px 0px;
  width: 100%;
  height: 257px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--Gray-2, #e6e6e6);
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
const DottedLine = styled.div`
  width: 92%;
  height: 0px;
  border: 1px dotted #bebebe;
`;

const FilterLabel = styled.div`
  display: flex;
  width: 116px;
  margin-left: 28px;
  height: 28px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: var(--Gray-9, #27272e);

  /* Body/4 */
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;

const FilterAns = styled.button`
  display: inline-flex;
  height: 28px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: var(--Gray-9, #27272e);
  margin-left: 5px;
  /* Body/4 */
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;
