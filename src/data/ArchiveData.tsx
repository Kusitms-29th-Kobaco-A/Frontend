export interface VideoTypeOption {
  value: string;
  label: string; // react-select는 label 속성을 사용
}

export const videoTypeList: VideoTypeOption[] = [
  { value: "publicAd", label: "공익광고" },
  { value: "privateAd", label: "상업광고" },
  { value: "mv", label: "MV" },
];

export const industryList: VideoTypeOption[] = [
  { value: "publicAd", label: "공익광고" },
  { value: "privateAd", label: "상업광고" },
  { value: "mv", label: "MV" },
];

export const videoOrderList: VideoTypeOption[] = [
  { value: "recentRegistered", label: "최근 등록순" },
  { value: "mostViewed", label: "조회순" },
  { value: "recommended", label: "추천순" },
];

export const recommendKeywordsList = ["유머있는", "신뢰감있는", "커피"];
