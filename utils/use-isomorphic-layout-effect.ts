import { useEffect, useLayoutEffect } from 'react'

const useIsomorphicLayoutEffect: typeof useLayoutEffect = typeof window === 'undefined'
  ? useEffect
  : useLayoutEffect

export default useIsomorphicLayoutEffect
