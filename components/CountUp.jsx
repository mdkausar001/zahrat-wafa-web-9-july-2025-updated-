import React, { useEffect, useRef, useState } from 'react'

const CountUp = ({ end, duration = 2000, ...props }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || hasAnimated) return
      const rect = ref.current.getBoundingClientRect()
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight
      // Trigger when bottom of element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        setHasAnimated(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Check on mount in case already visible
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasAnimated])

  useEffect(() => {
    if (!hasAnimated) return
    let start = 0
    const increment = end / (duration / 16)
    let rafId

    const step = () => {
      start += increment
      if (start < end) {
        setCount(Math.floor(start))
        rafId = requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    step()
    return () => cancelAnimationFrame(rafId)
  }, [end, duration, hasAnimated])

  return (
    <span ref={ref} {...props}>
      {count}+
    </span>
  )
}

export default CountUp
