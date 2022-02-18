import { VFC } from 'react'
import { SvgPackman } from 'src/assets/svgs'
import { white } from 'src/styles/colors'
import { pageGuide } from 'src/styles/mixins'
import styled from 'styled-components'

export const Header: VFC = () => (
  <Wrapper>
    <Logo />
    <Control>
      <Button>Menu</Button>
    </Control>
  </Wrapper>
)

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  ${pageGuide}
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(48px) brightness(1.48);
  background-color: ${white}7a;
  z-index: 1;
`

const Logo = styled(SvgPackman)`
  width: 120px;
  height: 120px;
`

const Button = styled.p`
  font-size: 12px;
  letter-spacing: 0.12em;

  svg {
    margin-left: 8px;
    opacity: 0.5;
  }
`

const Control = styled.div`
  display: flex;
  align-items: center;
  ${Button} {
    margin-right: 24px;
  }
`
