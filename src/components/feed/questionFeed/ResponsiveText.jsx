import React, { useState, useEffect } from 'react';

const ResponsiveText = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트될 때 리사이즈 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 화면 크기에 따라 다른 텍스트 반환
  const getText = () => {
    if (windowWidth >= 768) {
      return '질문 작성하기';
    } else {
      return '질문 작성';
    }
  };

  return <>{getText()}</>;
};

export default ResponsiveText;
