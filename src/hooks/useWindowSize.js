import { useState, useEffect } from 'react';

/**
 * 현재 windowSize 값을 가진 객체 state를 반환하는 커스텀 훅
 * @returns windowSize = {width, height}
 */
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    // 이벤트 리스너를 등록, resize마다 계속 handleResize가 실행됨
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
