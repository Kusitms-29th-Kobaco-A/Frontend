/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import thumbsUp from "../../../assets/archive/BlankThumbsUp.svg";
import fillThumbsUp from "../../../assets/archive/FillThumbsUp.svg";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const EachCommentBox = ({ item }: any) => {
  const [likeState, setLikeState] = useState<any>({});
  const token = localStorage.getItem("token");

  const getLikeCount = useCallback(async () => {
    setLikeState({
      isLike: true,
      likeCount: 2,
    });

    try {
      await axios
        .get(`https://dev.simproject.kr/api/comments/${item.commentId}/like`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res: any) => {
          console.log(res);
          setLikeState(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  const clickThumbsUp = async () => {
    try {
      await axios
        .patch(
          `https://dev.simproject.kr/api/comments/${item.commentId}/like`,
          {},
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          getLikeCount();
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLikeCount();
  }, [getLikeCount]);

  return (
    <CommentBox>
      <CommentId>@user-{item.userId}</CommentId>
      <CommentContent>{item.content}</CommentContent>
      <RowComponent>
        {likeState.isLike ? (
          <>
            <ThumbsUpIcon
              onClick={clickThumbsUp}
              src={fillThumbsUp}
              alt="thumbs"
            />
            <FillThumbsCountText>{likeState.likeCount}</FillThumbsCountText>
          </>
        ) : (
          <>
            <ThumbsUpIcon onClick={clickThumbsUp} src={thumbsUp} alt="thumbs" />
            <ThumbsCountText>{likeState.likeCount}</ThumbsCountText>
          </>
        )}
      </RowComponent>
    </CommentBox>
  );
};

export default EachCommentBox;

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
  margin-left: 4px;
  /* Detail/5 */
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.4px;
`;

const FillThumbsCountText = styled(ThumbsCountText)`
  color: #d33b4d;
`;
