import { useEffect, useState } from 'react'

export default function useScrollDirection () {
  const [ scrollDirection, setScrollDirection ] = useState<string>(null!)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const handleScroll = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? 'down' : 'up'
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ scrollDirection ])

  return scrollDirection
}