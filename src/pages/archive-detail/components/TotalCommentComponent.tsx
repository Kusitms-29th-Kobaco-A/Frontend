/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import thumbsUp from "../../../assets/archive/BlankThumbsUp.svg";
// 페이지네이션
import Pagination from "react-js-pagination";
import "../../archive-main/components/paging.css";

const TotalCommentComponent = ({ advertiseId }: any) => {
  console.log(advertiseId.advertiseId);

  const [commentList, setCommentList] = useState<any>([]);
  const [commentItemCount, setCommentItemCount] = useState<number>(50);

  const getCommentList = useCallback(async () => {
    try {
      setCommentList([
        {
          userId: 1,
          content:
            "댓글내용을 뭐라 작성해야 할 지 모르겠어서 무엇을 작성을 해야할까요? 정말로 무엇을 작성해야 할지 모르겠습니다.",
          likeCount: 12,
        },
        {
          userId: 2,
          content: "댓글내용을해야 할지 모르겠습니다.",
          likeCount: 10,
        },
        {
          userId: 3,
          content:
            "댓글내용을 뭐라 작성해야 할 지 모르겠어서 무엇을 작성을 해야할까요? 정말로 무엇을 작성해야 할지 모르겠습니다.",
          likeCount: 5,
        },
        {
          userId: 4,
          content:
            "댓글내용을 뭐라 작성해야 할 지 모르겠어서 무엇을 작성을 해야할까요? 정말로 무엇을 작성해야 할지 모르겠습니다.",
          likeCount: 12,
        },
        {
          userId: 5,
          content:
            "댓글내용을 뭐라 작성해야 할 지 모르겠어서 무엇을 작성을 해야할까요? 정말로 무엇을 작성해야 할지 모르겠습니다.",
          likeCount: 12,
        },
        {
          userId: 6,
          content:
            "댓글내용을 뭐라 작성해야 할 지 모르겠어서 무엇을 작성을 해야할까요? 정말로 무엇을 작성해야 할지 모르겠습니다.",
          likeCount: 12,
        },
        {
          userId: 7,
          content:
            "댓글내용을 뭐라 작성해야 할 지 모르겠어서 무엇을 작성을 해야할까요? 정말로 무엇을 작성해야 할지 모르겠습니다.",
          likeCount: 12,
        },
        {
          userId: 8,
          content:
            "댓글내용을 뭐라 작성해야 할 지 모르겠어서 무엇을 작성을 해야할까요? 정말로 무엇을 작성해야 할지 모르겠습니다.",
          likeCount: 12,
        },
        {
          userId: 9,
          content:
            "댓글내용을 뭐라 작성해야 할 지 모르겠어서 무엇을 작성을 해야할까요? 정말로 무엇을 작성해야 할지 모르겠습니다.",
          likeCount: 12,
        },
        {
          userId: 10,
          content:
            "댓글내용을 뭐라 작성해야 할 지 모르겠어서 무엇을 작성을 해야할까요? 정말로 무엇을 작성해야 할지 모르겠습니다.",
          likeCount: 12,
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getCommentList();
  }, [getCommentList]);

  //페이징을 위한 page 변수선언
  const [page, setPage] = useState<number>(1);
  // 페이지 이동함수
  const handlePageChange = (page: number) => {
    setPage(page);
    console.log(page);
  };

  return (
    <TotalComponent>
      <CenteredInnerComponent>
        <ItemCountText>댓글 {commentItemCount}개</ItemCountText>
        <WriteCommentComponent>
          <WriteCommentBtn>댓글 쓰기</WriteCommentBtn>
        </WriteCommentComponent>
        <LineDiv />
        {commentList?.map((item: any) => {
          return (
            <CommentBox>
              <CommentId>@user-{item.userId}</CommentId>
              <CommentContent>{item.content}</CommentContent>
              <RowComponent>
                <ThumbsUpIcon src={thumbsUp} alt="thumbs" />
                <ThumbsCountText>{item.likeCount}</ThumbsCountText>
              </RowComponent>
            </CommentBox>
          );
        })}
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
            totalItemsCount={commentItemCount}
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

const ItemCountText = styled.div`
  color: var(--Gray-9, #27272e);

  /* Heading/3 */
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.4px;
`;

const WriteCommentComponent = styled.div`
  margin: 16px 0px 12px 0px;
`;

const WriteCommentBtn = styled.button`
  border: none;
  display: inline-flex;
  padding: 8px 12px;
  align-items: center;
  gap: 4px;
  border-radius: 21.5px;
  background: var(--Main-1, #d33b4d);
  color: var(--Gray-1, #f4f6f6);
  text-align: center;
  cursor: pointer;
  /* Body/4 */
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;

const LineDiv = styled.div`
  width: 100%;
  height: 0px;
  border: 0.3px solid #707887;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0px 0px 0px;
  height: 68px;
  width: 100%;
`;

const CommentId = styled.div`
  color: var(--Gray-9, #27272e);

  /* Body/6 */
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.4px;
`;
const CommentContent = styled.div`
  width: 100%;
  color: var(--Gray-7, #707887);

  /* Detail/4 */
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.4px;
`;

const RowComponent = styled.div`
  display: flex;
  align-items: center;
`;

const ThumbsUpIcon = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

const ThumbsCountText = styled.div`
  color: var(--Gray-7, #707887);
  text-align: center;

  /* Detail/5 */
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.4px;
`;
