'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/routing'

export function Header() {
  const t = useTranslations('Home')
  const locale = useLocale()
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
    <header>
      <nav className="animate-fade bg-header-bg border-b-header-border border-b fixed z-20 w-screen top-0 h-[60px] backdrop-blur-lg">
        {/* Desktop */}
        <div className="justify-between items-center px-8 h-full max-w-[1340px] ml-auto mr-auto md:flex hidden">
          <Image
            width={1000}
            height={1000}
            className="w-48"
            src="foton-icon-white.svg"
            alt="logo"
          />
          <div className="flex items-center h-full gap-8 text-[15px]">
            <a href="#home">{t('homeLink')}</a>
            <a href="#services">{t('servicesLink')}</a>
            <a href="#projects">{t('projectsLink')}</a>
            <a href="#about">{t('aboutLink')}</a>
          </div>
          <div className="flex gap-8">
            <a
              href="#contact"
              className="bg-light-primary px-5 py-[0.35rem] text-[15px] text-dark-primary font-[500] rounded-md hover:bg-[#e0e0e0] hvoer:text-dark-secondary transition-all duration-300"
            >
              {t('contactLink')}
            </a>
            {locale === 'en' ? (
              <Link href="sq">
                <Image
                  src="/icons8-albania-circular-96.png"
                  alt="Albanian"
                  className="md:w-8 md:h-8"
                  width={96}
                  height={96}
                />
              </Link>
            ) : (
              <Link href="en">
                <Image
                  src="/icons8-usa-96.png"
                  alt="English"
                  className="md:w-8 md:h-8"
                  width={96}
                  height={96}
                />
              </Link>
            )}
          </div>
        </div>

        {/* Mobile */}
        <div className="justify-between items-center px-8 h-full max-w-[1340px] ml-auto mr-auto md:hidden flex">
          <Image
            width={1000}
            height={1000}
            className="w-48"
            src="foton-icon-white.svg"
            alt="logo"
          />
          <div
            ref={mobileLinksContainerRef}
            className="flex-col flex w-screen absolute left-0 transition-all duration-300 -z-10 h-[300px] items-center justify-between text-base bg-dark-secondary py-8"
            style={{
              opacity: 0,
              top: '-300px',
            }}
          >
            <a className="text-white" href="#home">
              {t('homeLink')}
            </a>
            <a className="text-white" href="#services">
              {t('servicesLink')}
            </a>
            <a className="text-white" href="#projects">
              {t('projectsLink')}
            </a>
            <a className="text-white" href="#about">
              {t('aboutLink')}
            </a>
            <a className="text-white" href="#contact">
              {t('contactLink')}
            </a>
          </div>
          <div className="flex gap-4">
            {locale === 'en' ? (
              <Link href="sq">
                <Image
                  src="/icons8-albania-circular-96.png"
                  alt="Albanian"
                  className="w-10 h-10"
                  width={96}
                  height={96}
                />
              </Link>
            ) : (
              <Link href="en">
                <Image
                  src="/icons8-usa-96.png"
                  alt="English"
                  className="w-10 h-10"
                  width={96}
                  height={96}
                />
              </Link>
            )}
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
        </div>
      </nav>
    </header>
  )
}
