// 비디오 조건 설정 시 동일 인터페이스
export interface VideoTypeOption {
  value: string;
  label: string;
}

// 토픽선택
export const videoTypeList: VideoTypeOption[] = [
  { value: "publicAd", label: "공익광고" },
  { value: "privateAd", label: "상업광고" },
  { value: "mv", label: "MV" },
];

//산업군
export const industryList: VideoTypeOption[] = [
  { value: "publicAd", label: "공익광고" },
  { value: "privateAd", label: "상업광고" },
  { value: "mv", label: "MV" },
];

//비디오 조회 순서
export const videoOrderList: VideoTypeOption[] = [
  { value: "recentRegistered", label: "최근 등록순" },
  { value: "mostViewed", label: "조회순" },
  { value: "recommended", label: "추천순" },
];

// 기본 제공 추천 키워드
export const recommendKeywordsList = ["유머있는", "신뢰감있는", "커피"];
