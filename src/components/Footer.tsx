import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function Footer() {
  const t = useTranslations('Home')

  return (
    <footer className="w-[95vw] md:w-[90vw] bg-dark-primary ml-auto mr-auto">
      <div className="justify-between items-center flex flex-col p-3 md:p-8 h-full max-w-[1340px] ml-auto mr-auto">
        <div className="flex md:flex-row flex-col w-full justify-between">
          <div className="flex flex-col md:w-1/2 w-full gap-4">
            <Image
              width={1000}
              height={1000}
              className="w-64"
              src="foton-logo-green-icon-white-text.svg"
              alt="logo"
            />
            <span className="text-light-secondary max-w-[35ch] text-[15px]">
              {t('footer')}
            </span>
          </div>
          <div className="flex md:flex-row flex-col md:w-1/2 md:mt-0 w-full justify-start md:ml-48 md:gap-16">
            <div className="flex flex-col gap-2 md:mt-0 mt-12 w-fit whitespace-nowrap">
              <span className="text-light-primary tracking-wide">
                {t('company')}
              </span>
              <div className="flex flex-col gap-2 text-[15px]">
                <a
                  href="#home"
                  className="hover:text-light-primary text-light-secondary transition-all"
                >
                  {t('homeLink')}
                </a>
                <a
                  href="#services"
                  className="hover:text-light-primary text-light-secondary transition-all"
                >
                  {t('servicesLink')}
                </a>
                <a
                  href="#projects"
                  className="hover:text-light-primary text-light-secondary transition-all"
                >
                  {t('projectsLink')}
                </a>
                <a
                  href="#about"
                  className="hover:text-light-primary text-light-secondary transition-all"
                >
                  {t('aboutLink')}
                </a>
                <a
                  href="#contact"
                  className="hover:text-light-primary text-light-secondary transition-all"
                >
                  {t('contactLink')}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:mt-0 mt-12 w-fit whitespace-nowrap">
              <span className="text-light-primary tracking-wide">
                {t('community')}
              </span>
              <div className="flex flex-col gap-2 text-[15px]">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="hover:text-light-primary text-light-secondary transition-all"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:mt-0 mt-12 w-fit whitespace-nowrap">
              <span className="text-light-primary tracking-wide">LEGAL</span>
              <div className="flex flex-col gap-2 text-[15px]">
                <a
                  href="/privacy"
                  className="hover:text-light-primary text-light-secondary transition-all"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full bg-footer-divider border-none h-[1px] my-14" />
        <div className="flex w-full justify-start">
          <span className="text-light-primary">{t('copyright')}</span>
        </div>
      </div>
    </footer>
  )
}
