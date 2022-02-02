import { css } from 'styled-components'

export const pageMarginCssVar = '--page-margin'
export const pageMarginNegativeCssVar = '--page-margin-negative'

export const noScrollbar = css`
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const absoluteFill = css`
  position: absolute;
  inset: 0;
  margin: auto;
`
