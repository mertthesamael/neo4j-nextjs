import { cn } from '@/lib/utils'
import React, { FC } from 'react'

type SpinnerProps = {
  className?:string
}

const Spinner: FC<SpinnerProps> = ({ className }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="42"
    height="42"
    viewBox="0 0 24 24"
    fill="none"
    style={{stroke:"url(#icon-gradient)"}}
    // stroke='currentColor'
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("animate-spin", className)}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
  )
}

export default Spinner;