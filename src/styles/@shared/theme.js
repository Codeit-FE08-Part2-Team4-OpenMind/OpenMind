const windowSize = {
  desktop: 'screen and (min-width: 1200px)',
  tablet: 'screen and (min-width: 768px) and (max-width: 1199px)',
  mobile: 'screen and (min-width: 375px) and (max-width: 767px)',
};

const fontSize = {
  large: '20px',
  medium: '18px',
  small: '16px',
  xsmall: '14px',
};

const fontWeight = {
  regular: '400',
  medium: '500',
  bold: '700',
};

const light = {
  background: 'var(--gray20)',
  fontPrimary: 'var(--gray60)',
  fontSecondary: 'var(--gray10)',
  hoverBlue: 'var(--blue)',
  buttonPrimary: 'var(--brown40)',
  buttonSecondary: 'var(--brown10)',
  buttonPrimaryPressed: 'var(--brown50)',
  buttonSecondaryPressed: 'var(--brown20)',
  borderBrown: 'var(--brown40)',
  borderGray: 'var(--gray40)',
  buttonInactiveOpacity: '0.4',
};

// light랑 똑같이 두었는데, 구현 시에 색상만 바꾸면 됨
const dark = {
  background: 'var(--gray20)',
  fontPrimary: 'var(--gray60)',
  fontSecondary: 'var(--gray10)',
  hoverBlue: 'var(--blue)',
  buttonPrimary: 'var(--brown40)',
  buttonSecondary: 'var(--brown10)',
  buttonPrimaryPressed: 'var(--brown50)',
  buttonSecondaryPressed: 'var(--brown20)',
  borderBrown: 'var(--brown40)',
  borderGray: 'var(--gray40)',
  buttonInactiveOpacity: '0.4',
};

const settings = {
  windowSize,
  fontSize,
  fontWeight,
};

const modes = {
  light,
  dark,
};

const theme = {
  settings,
  modes,
};

export default theme;
