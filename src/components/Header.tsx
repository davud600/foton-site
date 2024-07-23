'use client'

import { useRef } from 'react'
import Image from 'next/image'

export function Header() {
  const mobileLinksContainerRef = useRef<HTMLDivElement | null>(null)

  const toggleMobileNav = () => {
    if (!!!mobileLinksContainerRef.current) return

    const top =
      mobileLinksContainerRef.current!.style.top === '-300px'
        ? '60px'
        : '-300px'
    const opacity =
      mobileLinksContainerRef.current!.style.opacity === '0' ? '1' : '0'

    mobileLinksContainerRef.current!.style.top = top
    mobileLinksContainerRef.current!.style.opacity = opacity
  }

  return (
    <nav className="animate-fade bg-header-bg border-b-header-border border-b fixed z-20 w-screen top-0 h-[60px] backdrop-blur-lg">
      {/* Desktop */}
      <div className="justify-between items-center px-8 h-full max-w-[1340px] ml-auto mr-auto md:flex hidden">
        <Image src="" alt="logo" />
        <div className="flex items-center h-full gap-8 text-[15px]">
          <a href="#home">Home</a>
          <a href="#services">Our Services</a>
          <a href="#projects">Our Work</a>
          <a href="#about">About us</a>
        </div>
        <a
          href="#contact"
          className="bg-light-primary px-5 py-[0.35rem] text-[15px] text-dark-primary font-[500] rounded-md hover:bg-[#e0e0e0] hvoer:text-dark-secondary transition-all duration-300"
        >
          Contact
        </a>
      </div>

      {/* Mobile */}
      <div className="justify-between items-center px-8 h-full max-w-[1340px] ml-auto mr-auto md:hidden flex">
        <Image src="" alt="logo" />
        <div
          ref={mobileLinksContainerRef}
          className="flex-col flex w-screen absolute left-0 transition-all duration-300 -z-10 h-[300px] items-center justify-between text-base bg-dark-secondary py-8"
          style={{
            opacity: 0,
            top: '-300px',
          }}
        >
          <a href="#home">Home</a>
          <a href="#services">Our Services</a>
          <a href="#projects">Our Work</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
        </div>
        <button onClick={toggleMobileNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            className="fill-white md:h-6 md:w-6 h-5 w-5"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </button>
      </div>
    </nav>
  )
}
