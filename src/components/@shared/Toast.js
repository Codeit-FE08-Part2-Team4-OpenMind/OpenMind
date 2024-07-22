import toast from 'react-hot-toast';

const toastStyle = {
  background: '#333',
  color: '#fff',
  borderRadius: '8px',
  padding: '16px',
};

const showToast = (message, duration = 4000) => {
  const options = {
    duration,
    style: toastStyle, // 기본 스타일 설정
  };

  toast(message, options); // 기본 메시지
};

export default showToast;
