/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import warning from "../../../assets/archive/Warning.svg";

import "./paging.css";
import EachCommentBox from "./EachCommentBox";

// 해당 광고 전체 댓글 포함하는 컴포넌트
const TotalCommentComponent = ({ advertiseId }: any) => {
  console.log(advertiseId.advertiseId);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // 리스트와 개수 받는 변수
  const [commentList, setCommentList] = useState<any>([]);
  const [commentItemCount, setCommentItemCount] = useState<number>(50);
  const [totalItemCount, setTotalItemCount] = useState<number>(50);
  // 댓글 입력 부분
  const [inputComment, setInputComment] = useState<string>("");
  // 로그인 경고 창 변수
  const [isOpenLoginWarning, setIsOpenLoginWarning] = useState<any>(false);

  // 댓글 리스트 받기 api
  const getCommentList = useCallback(async () => {
    try {
      await axios
        .get(
          `https://dev.simproject.kr/api/comments/${advertiseId.advertiseId}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          setCommentList(res.data.content);
          setCommentItemCount(res.data.numberOfElements);
          setTotalItemCount(res.data.totalElements);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  // 댓글 입력 함수
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputComment(event.target.value);
  };

  // 모달을 닫고 input 값을 초기화하는 함수
  const handleCloseLoginWarninghModal = () => {
    setIsOpenLoginWarning(false);
  };

  // 댓글 취소시
  const handleCancelComment = () => {
    setInputComment("");
  };

  //페이징을 위한 page 변수선언
  const [page, setPage] = useState<number>(1);
  // 페이지 이동함수
  const handlePageChange = (page: number) => {
    setPage(page);
    console.log(page);
  };

  // 댓글 등록 시 api
  const handleSubmitComment = async () => {
    if (!inputComment) {
      alert("댓글을 입력해주세요.");
      return;
    }
    try {
      if (token) {
        await axios
          .post(
            `https://dev.simproject.kr/api/comments/${advertiseId.advertiseId}`,
            { content: inputComment },
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          )
          .then((res) => {
            console.log(res);
            getCommentList();
            setInputComment("");
          });
      } else {
        isOpenLoginWarning();
      }
    } catch (error) {
      console.error("댓글 등록에 실패했습니다.", error);
      alert("댓글 등록에 실패했습니다.");
    }
  };

  useEffect(() => {
    getCommentList();
  }, [getCommentList]);

  return (
    <TotalComponent>
      {/* 로그인 경고 창 부분 */}
      {isOpenLoginWarning && (
        <PatchTotalModal>
          <WarningIcon src={warning} alt="warning" />
          <OnLoginModalText marginTop="17px">해당 서비스는</OnLoginModalText>
          <OnLoginModalText>로그인 후 사용할 수 있습니다.</OnLoginModalText>
          <PatchModalButtonComponent>
            <PatchModalBtn style={{ borderRight: "2px solid #e6e6e6" }}>
              <PatchModalBtnText onClick={handleCloseLoginWarninghModal}>
                취소
              </PatchModalBtnText>
            </PatchModalBtn>
            <PatchModalBtn>
              <PatchModalBtnText
                onClick={() => {
                  navigate("/login");
                }}
                style={{ color: "#D33B4D" }}
              >
                로그인
              </PatchModalBtnText>
            </PatchModalBtn>
          </PatchModalButtonComponent>
        </PatchTotalModal>
      )}

      <CenteredInnerComponent>
        {/* 댓글 개수 */}
        <ItemCountText>댓글 {commentItemCount}개</ItemCountText>
        {/* 댓글 입력 부분 */}
        <WriteCommentComponent>
          <CommentInput
            type="text"
            value={inputComment}
            onChange={handleInputChange}
            placeholder="댓글 쓰기..."
          />
        </WriteCommentComponent>
        <LineDiv />

        {/* 댓글 관련 버튼 부분 */}
        <BtnDiv>
          <CancelBtn onClick={handleCancelComment}>취소</CancelBtn>
          <EnrollBtn onClick={handleSubmitComment}>등록</EnrollBtn>
        </BtnDiv>

        {/* 댓글리스트 띄워주기 */}
        <CommentComponent>
          {commentList?.map((item: any) => {
            return <EachCommentBox item={item} />;
          })}
        </CommentComponent>

        {/* 페이지 처리 부분 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "14px",
          }}
        >
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={totalItemCount}
            pageRangeDisplayed={3}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
        </div>
      </CenteredInnerComponent>
    </TotalComponent>
  );
};

export default TotalCommentComponent;

const TotalComponent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 46px;
  width: 100%;
  height: 1077px;
`;
// 내부 일정 너비로 가운데 정렬
const CenteredInnerComponent = styled.div`
  width: 77.813vw;
  height: 100%;
`;

// 댓글 개수
const ItemCountText = styled.div`
  color: var(--Gray-9, #27272e);
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

// 댓글 입력 부분
const WriteCommentComponent = styled.div`
  margin: 16px 0px 12px 0px;
`;
const LineDiv = styled.div`
  width: 100%;
  height: 0px;
  border: 0.3px solid #707887;
`;

// 댓글 전체 컴포넌트
const CommentComponent = styled.div`
  width: 100%;
  margin-top: -32px;
`;

// 댓글 입력부분
const CommentInput = styled.input`
  width: 714px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--Gray-1, #f4f6f6);
  color: #000;
  padding-left: 9px;
  outline: none;
  border: none;
  /* Detail/3 */
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  &::placeholder {
    color: var(--Gray-7, #707887);
  }
`;

// 댓글 관련 버튼
const BtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 9.94px;
`;
const CancelBtn = styled.button`
  display: flex;
  height: 22px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;
const EnrollBtn = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  align-items: center;
  gap: 4px;
  border-radius: 21.5px;
  background: var(--Main-1, #d33b4d);
  color: var(--White-1, #fff);
  text-align: center;
  margin-left: 39px;
  border: none;
  outline: none;
  /* Body/4 */
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  cursor: pointer;
`;

// 모달 창
const PatchTotalModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 560px;
  height: 330px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid var(--Gray-2, #e6e6e6);
  background: #fff;
`;
const WarningIcon = styled.img`
  margin: 27px 0px 0px 0px;
  width: 80px;
  height: 80px;
`;
const OnLoginModalText = styled.div<{ marginTop?: string }>`
  margin-top: 49px;
  color: var(--Gray-8, #373d49);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
  margin-top: ${(props) => props.marginTop || "0px"};
`;
const PatchModalButtonComponent = styled.div`
  margin: 35px 0px 0px 0px;
  width: 100%;
  display: flex;
  border-top: 2px solid #e6e6e6;
`;
const PatchModalBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 281px;
  height: 93px;
`;
const PatchModalBtnText = styled.div`
  color: var(--Gray-7, #707887);
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
  cursor: pointer;
`;
