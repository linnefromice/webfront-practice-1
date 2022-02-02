import { createGlobalStyle } from 'styled-components'
import {
  noScrollbar,
  pageMarginCssVar,
  pageMarginNegativeCssVar,
} from './mixins'

export const GlobalStyles = () => <Styles />

const Styles = createGlobalStyle`
  img {
    vertical-align: bottom;
    pointer-events: none;
  }
  html {
    height: 100%;
  }
  body {
    ${pageMarginCssVar}: max(5.6vw, 16px);
    ${pageMarginNegativeCssVar}: calc(0px - max(5.6vw, 16px));
    min-height: 100vh;
    height: 100%;
    line-break: strict;
    word-break: break-word;

    > div#_next {
      height: 100%;
      display: flex;
      flex-flow: column;
      main {
        flex: 1;
      }
    }
  }
  div {
    ${noScrollbar}
  }
`
