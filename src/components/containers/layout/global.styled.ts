import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    --color-primary: #22D486;
    --color-primary-hover: #20BD78;
    --color-secondary: #323C46;
    --color-secondary-hover: #565D5A;
    --color-secondary-light: #A9AEB4;
    --color-grey: #D9DCE1;
    --color-grey-hover: #C4C9D1;
    --color-red: #FF4081;
    --color-red-hover: #E73370;
    --color-grey-lighter: #C9CED3;
    --color-grey-light: #D2D6DA;
    --color-grey-dark: #949EA8;
    --color-grey-darker: #7D7878;
    --color-date-text: #CACDD0;
    --color-border-bottom: #DAE1E7;
  }
`;

export default GlobalStyles;
