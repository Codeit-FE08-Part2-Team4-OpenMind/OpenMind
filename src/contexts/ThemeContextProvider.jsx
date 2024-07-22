import { useState, createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/@shared/theme';

const ThemeContext = createContext();

/**
 * 사용자의 이전 설정 또는 시스템 설정을 가져오는 함수
 * @returns {'dark' | 'light'} 사용자의 이전 테마 설정 또는 시스템 테마 설정
 */
const getTheme = () => {
  const themeStorage = localStorage.getItem('theme');

  if (!themeStorage) {
    // 지정해둔 themeStorage가 없다면 사용자 시스템 설정을 가져옴
    const isBrowserDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initTheme = isBrowserDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', initTheme);
    return initTheme;
  }

  return themeStorage;
};

/**
 * ThemeProvider를 포함하는 ContextProvider를 반환하는 컴포넌트
 * @param {ReactNode} children
 */
export default function ThemeContextProvider({ children }) {
  console.log(theme, 'theme');
  const [themeSetting, setThemeSetting] = useState(getTheme());

  const toggleTheme = () => {
    setThemeSetting(prevState => {
      const resultTheme = prevState === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', resultTheme);
      return resultTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ themeSetting, toggleTheme }}>
      <ThemeProvider theme={theme[themeSetting]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

/**
 * ThemeContext 에서 theme를 꺼내는 훅
 * @returns {'dark' | 'light'} themeSetting 사용자의 이전 테마 설정 또는 시스템 테마 설정
 */
export const useThemeSetting = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('반드시 ThemeContextProvider 안에서 사용해야 합니다.');
  }

  return context.themeSetting;
};

/**
 * ThemeContext 에서 useThemeToggle 함수를 꺼내는 훅
 * @returns {Function} toggleTheme 테마 설정을 바꾸는 함수
 */
export const useThemeToggle = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('반드시 ThemeContextProvider 안에서 사용해야 합니다.');
  }

  return context.toggleTheme;
};
