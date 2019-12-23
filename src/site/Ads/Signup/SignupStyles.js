import styled from 'styled-components'
import { colors } from 'Variables'

export const SignupBase = styled.div`
  background: ${colors.secondaryDarker};
  color: ${colors.light};
  line-height: 1.3;
  margin: 32px auto;
  padding: 16px 8px 24px;
  text-align: center;
  width: 250px;
`

export const SignupTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  padding: 16px;
`

export const SignupSubtitle = styled.div`
  color: ${colors.greyLighter};
  font-size: 22px;
  font-weight: 500;
  margin: 0 0 24px;
  padding: 8px 16px;
`

export const SignupInput = styled.input`
  border: 0 none;
  border-radius: 0;
  color: #666;
  font-size: 16px;
  font-weight: 400;
  height: 32px;
  margin-bottom: 24px;
  outline: none;
  padding: 10px;

  transition: all 0.3s ease-in-out;
  -webkit-appearance: none;

  &:focus {
    background-color: #ffffcf;
  }
`
