// 비디오 조건 설정 시 동일 인터페이스
export interface VideoTypeOption {
  value: string;
  label: string;
}

// 토픽선택
export const videoTypeList: VideoTypeOption[] = [
  { value: "컨셉1", label: "컨셉1" },
  { value: "컨셉2", label: "컨셉2" },
  { value: "컨셉3", label: "컨셉3" },
  { value: "컨셉4", label: "컨셉4" },
  { value: "컨셉5", label: "컨셉5" },
  { value: "컨셉6", label: "컨셉6" },
  { value: "컨셉7", label: "컨셉7" },
  { value: "컨셉8", label: "컨셉8" },
  { value: "컨셉9", label: "컨셉9" },
];

//산업군
export const industryList: VideoTypeOption[] = [
  { value: "산업군1", label: "산업군1" },
  { value: "산업군2", label: "산업군2" },
  { value: "산업군3", label: "산업군3" },
  { value: "산업군4", label: "산업군4" },
  { value: "산업군5", label: "산업군5" },
  { value: "산업군6", label: "산업군6" },
  { value: "산업군7", label: "산업군7" },
  { value: "산업군8", label: "산업군8" },
  { value: "산업군9", label: "산업군9" },
];

//비디오 조회 순서
export const videoOrderList: VideoTypeOption[] = [
  { value: "최근등록순", label: "최근등록순" },
  { value: "조회순", label: "조회순" },
  { value: "추천순", label: "추천순" },
];

// 기본 제공 추천 키워드
export const recommendKeywordsList = ["유머있는", "신뢰감있는", "커피"];
