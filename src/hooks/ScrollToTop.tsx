import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // 라우트의 pathname이 변경될 때마다 실행

  return null; // UI를 렌더링할 필요가 없으므로 null 반환
};

export default ScrollToTop;
