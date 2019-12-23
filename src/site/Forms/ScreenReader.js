import { css } from 'styled-components'

export const ScreenReader = css`
  position: absolute;
  top: -10000em;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`