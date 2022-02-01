import { css } from 'styled-components'

export const noScrollbar = css`
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`
