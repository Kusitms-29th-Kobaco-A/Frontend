// 비디오 조건 설정 시 동일 인터페이스
export interface VideoTypeOption {
  value: string;
  label: string;
}

// 토픽선택
export const videoTypeList: VideoTypeOption[] = [
  { value: "감동적인", label: "감동적인" },
  { value: "상황극", label: "상황극" },
  { value: "신나는", label: "신나는" },
  { value: "유머있는", label: "유머있는" },
  { value: "정극", label: "정극" },
  { value: "반전있는", label: "반전있는" },
  { value: "판타지", label: "판타지" },
  { value: "패러디", label: "패러디" },
];

//산업군
export const industryList: VideoTypeOption[] = [
  { value: "디지털/가전", label: "디지털/가전" },
  { value: "서비스업", label: "서비스업" },
  { value: "생활/건강", label: "생활/건강" },
  { value: "숙박업", label: "숙박업" },
  { value: "식품/외식업", label: "식품/외식업" },
  { value: "유통업", label: "유통업" },
  { value: "중공업", label: "중공업" },
  { value: "패션의류/미용", label: "패션의류/미용" },
];

//비디오 조회 순서
export const videoOrderList: VideoTypeOption[] = [
  { value: "최근등록순", label: "최근등록순" },
  { value: "조회순", label: "조회순" },
  { value: "추천순", label: "추천순" },
];

// 기본 제공 추천 키워드
export const recommendKeywordsList = ["유머있는", "신뢰감있는", "커피"];
