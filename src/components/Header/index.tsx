import { MagnifyingGlass } from 'phosphor-react'
import Link from 'next/link'

import { Input, LinkContainer } from '@/styles/global'
import { Logo } from '../Logo'
import { Navbar } from './Navbar'
import {
  Avatar,
  Container,
  HeaderContainer,
  SearchBarContainer,
  SearchButton,
  UserContainer,
} from './styles'

import avatar from '../../assets/avatar.jpeg'
import { StickyNav } from './StickyNav'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <Container>
          <Link href={'/'}>
            <Logo />
          </Link>
          <Navbar />
          <SearchBarContainer>
            <Input placeholder="Buscar" />
            <SearchButton>
              <MagnifyingGlass weight="bold" />
            </SearchButton>
          </SearchBarContainer>
          <UserContainer>
            <Avatar src={avatar} width={32} height={32} alt="" />
            <LinkContainer href="#">
              <strong>Olá, Pablo</strong>
            </LinkContainer>
          </UserContainer>
        </Container>
      </HeaderContainer>
      <StickyNav />
    </>
  )
}
