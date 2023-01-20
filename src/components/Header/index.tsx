import { Logo } from '../Logo'
import { Navbar } from './Navbar'
import { Container, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Logo />
        <Navbar />
      </Container>
    </HeaderContainer>
  )
}
