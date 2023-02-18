import { useEffect, useState } from 'react'

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up')
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? 'down' : 'up'

      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    const listenToScroll = () => {
      let heightToHideFrom = 175
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop

      if (winScroll > heightToHideFrom) {
        isVisible && 
          setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', listenToScroll)
    window.addEventListener('scroll', updateScrollDirection)

    return () => {
      window.removeEventListener('scroll', listenToScroll)
      window.removeEventListener('scroll', updateScrollDirection) 
    }
  }, [scrollDirection, isVisible])

  return { scrollDirection, isVisible }
}

export function useScrollDirectionPage() {
  const [scrollDirection] = useState('up')
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const listenToScroll = () => {
      let heightToHideFrom = 400
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop

      if (winScroll > heightToHideFrom) {
        isVisible && 
          setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', listenToScroll)

    return () => {
      window.removeEventListener('scroll', listenToScroll)
    }
  }, [scrollDirection, isVisible])

  return { scrollDirection, isVisible }
}