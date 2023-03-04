import { List, MagnifyingGlass } from 'phosphor-react'
import Link from 'next/link'

import { Input, LinkContainer } from '@/styles/global'
import { Logo } from '../Logo'
import { Navbar } from './Navbar'
import { StickyNav } from './StickyNav'
import {
  Avatar,
  Container,
  HeaderContainer,
  SearchBarContainer,
  SearchButton,
  UserContainer,
} from './styles'


import avatar from '../../assets/avatar.jpeg'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <Container>
          <List className='menu-icon' weight='bold' size={32} />
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
