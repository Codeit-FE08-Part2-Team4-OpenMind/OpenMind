import styled from 'styled-components';
import { useThemeSetting, useThemeToggle } from '../../contexts/ThemeContextProvider';
import { getThemeColor } from '../../utils/getThemeColor';

/**
 * 테마를 바꿔주는 버튼 컴포넌트
 */
function ThemeToggler() {
  const themeSetting = useThemeSetting();
  const themeToggle = useThemeToggle();
  const themeEmoji = themeSetting === 'dark' ? '🌙' : '☀️';

  const handleThemeButtonClick = () => {
    themeToggle();
  };

  return <StyledThemeButton onClick={handleThemeButtonClick}>{themeEmoji}</StyledThemeButton>;
}

export default ThemeToggler;

const StyledThemeButton = styled.button`
  background-color: ${getThemeColor('bgColor')};
  padding: 10px 30px;
  font-size: 30px;
  border-radius: 30px;
  border: 1px solid ${getThemeColor('gray50')};
`;
