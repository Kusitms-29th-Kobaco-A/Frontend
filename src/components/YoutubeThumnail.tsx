import React from "react";
import styled from "styled-components";

interface YouTubeThumbnailProps {
  videoId?: string;
}

const YouTubeThumbnail: React.FC<YouTubeThumbnailProps> = ({ videoId }) => {
  // YouTube 썸네일 URL 생성
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return <ThumnailImg src={thumbnailUrl} alt="YouTube Thumbnail" />;
};

export default YouTubeThumbnail;

const ThumnailImg = styled.img`
  width: 100%;
  min-height: 135px;
  height: 10.546875vw;
`;
