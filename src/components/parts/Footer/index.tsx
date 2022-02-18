import { VFC } from 'react'
import { SvgPackman } from 'src/assets/svgs'
import { Link } from 'src/components/elements/Link'
import { black } from 'src/styles/colors'
import styled from 'styled-components'

export const Footer: VFC = () => (
  <Wrapper>
    <Logo />
    <Links>
      <Link>Terms of Service</Link>
      <Link>Privacy Policy</Link>
    </Links>
    <CopyRight>@2022, Linnefromice</CopyRight>
  </Wrapper>
)

const Logo = styled(SvgPackman)`
  width: 120px;
  height: 120px;
`

const Links = styled.div`
  ${Link} {
    display: block;
    text-align: center;
    margin-top: 20px;
    :first-child {
      margin-top: 24px;
    }
  }
`

const CopyRight = styled.p`
  color: ${black};
`

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 48px 96px;

  color: ${black};
  > svg {
    width: 144px;
    height: 96px;
  }
  ${Links} {
    border-top: 1px solid;
    margin-top: 24px;
    width: 100%;
  }
`
