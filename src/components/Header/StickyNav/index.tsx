import { Logo } from '@/components/Logo'
import { Input, LinkContainer } from '@/styles/global'
import { useScrollDirection } from '@/utils/useScroll'
import Link from 'next/link'
import { MagnifyingGlass } from 'phosphor-react'
import { Navbar } from '../Navbar'
import {
  Avatar,
  SearchBarContainer,
  SearchButton,
  UserContainer,
} from '../styles'
import { HeaderContainer, StickContainer } from './styles'

import avatar from '../../../assets/avatar.jpeg'
import { SimpleButton } from '@/components/Buttons/SimpleButtom'

export function StickyNav() {
  const { scrollDirection, isVisible } = useScrollDirection()

  return (
    <HeaderContainer
      className={
        isVisible
          ? 'hide'
          : 'show' && scrollDirection === 'down'
          ? 'hide'
          : 'show'
      }
    >
      <section>
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
        <SimpleButton href="#" type="secondary" content="Voltar ao topo" />
      </section>
    </HeaderContainer>
  )
}
