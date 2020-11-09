import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/Rubik-VariableFont_wght.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Rubik;
    src: url(${font});
  }
  html {
    font-family: Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }

  .center {
    text-align: center;
  }
`;

export default Typography;