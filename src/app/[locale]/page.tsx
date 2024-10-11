import { useTranslations } from 'next-intl'
import { ImageComparing } from '@/components/ImageComparing'
import { outfit } from '@/utils/fonts'
import Image from 'next/image'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <>
      <section
        id="home"
        className="min-h-[calc(100svh_-_61px)] flex flex-col justify-center items-center w-full bg-dark-background"
      >
        <div className="ml-auto mr-auto md:max-w-lg max-w-[90vw]">
          <h1
            style={outfit.style}
            className="linear-wipe animate-scroll-text font-normal text-3xl md:font-[500] md:text-5xl text-center my-16 tracking-wide !leading-[1.25] md:!leading-[4rem]"
          >
            {t('title')}
          </h1>
          <p className="animate-scroll-text text-center text-[15px] text-light-secondary">
            {t('description')}
          </p>
          <div className="flex md:flex-row flex-col justify-center gap-8 w-full my-10">
            <a
              href="#agro-vision"
              className="bg-transparent border text-center border-color-border-color-primary md:px-10 py-4 md:py-3 text-[15px] text-light-primary font-[500] rounded-md hover:bg-light-primary hover:text-dark-primary transition-all duration-300"
            >
              {t('otherAction')}
            </a>
            <a
              href="#services"
              className="bg-btn-primary text-center md:px-10 py-4 md:py-3 text-[15px] text-dark-primary font-[500] rounded-md hover:bg-transparent border border-btn-primary hover:text-btn-primary transition-all duration-300"
            >
              {t('callToAction')}
            </a>
          </div>
          {/* <div className="flex justify-center w-full">
            <a
              href="#"
              className="text-base text-light-primary font-[500] underline underline-offset-2"
            >
              {t('linkText')}
            </a>
          </div> */}
        </div>
      </section>
      <div className="flex justify-center items-center w-full h-full relative bg-dark-background pb-16">
        <Image
          src="/macbook.webp"
          width={2202}
          height={1262}
          className="w-[95vw] md:w-[70vw] h-auto relative"
          alt="macbook"
          objectFit="scale-down"
        />
      </div>
      <section
        id="services"
        className="min-h-[100svh] flex flex-col justify-center items-center w-full bg-dark-background"
      >
        <div className="ml-auto mr-auto md:max-w-lg max-w-[90vw] mb-16">
          <h1
            style={outfit.style}
            className="linear-wipe animate-scroll-text font-normal text-3xl md:font-[500] md:text-5xl text-center my-16 tracking-wide !leading-[1.25] md:!leading-[4rem]"
          >
            {t('ourServices')}
          </h1>
          <p className="animate-scroll-text text-center text-[15px] text-light-secondary">
            {t('servicesDescription')}
          </p>
        </div>
        <div className="py-16 mb-12 bg-dark-background-secondary w-full">
          <div className="flex flex-col w-full justify-center gap-16 px-4 ml-auto mr-auto md:max-w-xl max-w-[90vw]">
            <div className="flex gap-4 items-center justify-start">
              <span>
                <svg
                  className="fill-green-500 w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 32 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z" />
                </svg>
              </span>
              <span className="text-light-primary text-base md:text-lg">
                {t('serviceOne')}
              </span>
            </div>

            <div className="flex gap-4 items-center justify-center">
              <span className="text-light-primary text-base md:text-lg">
                {t('serviceTwo')}
              </span>
              <span>
                <svg
                  className="fill-blue-500 w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zm-312 8l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96l0 160c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64l0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-96c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
              </span>
            </div>

            <div className="flex gap-4 items-center justify-end">
              <span>
                <svg
                  className="fill-red-500 w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                </svg>
              </span>
              <span className="text-light-primary text-base md:text-lg">
                {t('serviceThree')}
              </span>
            </div>
          </div>
        </div>
        <div
          id="agro-vision"
          className="ml-auto mr-auto w-[95vw] md:w-[70vw] h-auto relative"
        >
          <ImageComparing />
        </div>
      </section>
      {/* <section
      id="projects"
      className="min-h-[100svh] flex flex-col justify-center items-center w-full bg-dark-background"
    ></section> */}
      <section
        id="about"
        className="min-h-[100svh] flex flex-col justify-center items-center w-full bg-dark-background"
      >
        <div className="ml-auto mr-auto md:max-w-lg max-w-[90vw]">
          <h1
            style={outfit.style}
            className="linear-wipe animate-scroll-text font-normal text-3xl md:font-[500] md:text-5xl text-center my-16 tracking-wide !leading-[1.25] md:!leading-[4rem]"
          >
            {t('aboutUs')}
          </h1>
          <p className="animate-scroll-text text-center text-[15px] text-light-secondary">
            {t('aboutDescription')}
          </p>
        </div>
        <div className="py-16 my-16 bg-dark-secondary w-full">
          <div className="ml-auto mr-auto md:max-w-lg max-w-[90vw]">
            <h2
              style={outfit.style}
              className="text-light-secondary font-normal text-xl md:font-[500] md:text-3xl text-center mb-8 tracking-wide !leading-[1.25] md:!leading-[4rem]"
            >
              {t('ourTeam')}
            </h2>
            <div className="flex flex-col gap-8 items-start text-lg">
              <div className="flex gap-2 items-center justify-start">
                <a
                  href="https://www.linkedin.com/in/drin-marevci-70b818234/"
                  target="_blank"
                  className="font-medium text-light-secondary hover:text-light-primary transition-all underline"
                >
                  Drin Marevci:{' '}
                </a>
                <span className="font-light text-light-secondary">
                  CEO (Chief Executive Officer)
                </span>
              </div>
              <div className="flex gap-2 items-center justify-start">
                <a
                  href="https://www.linkedin.com/in/davudg/"
                  target="_blank"
                  className="font-medium text-light-secondary hover:text-light-primary transition-all underline"
                >
                  Davud Gorqaj:{' '}
                </a>
                <span className="font-light text-light-secondary">
                  CTO (Chief Technology Officer)
                </span>
              </div>
              <div className="flex gap-2 items-center justify-start">
                <a
                  href="https://www.linkedin.com/in/drilona-gashi-82aa99114/"
                  target="_blank"
                  className="font-medium text-light-secondary hover:text-light-primary transition-all underline"
                >
                  Drilona Gashi:{' '}
                </a>
                <span className="font-light text-light-secondary">
                  COO (Chief Operating Officer)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="min-h-[100svh] flex flex-col justify-center items-center w-full bg-dark-background"
      >
        <div className="ml-auto mr-auto md:max-w-lg max-w-[90vw] w-full">
          <h1
            style={outfit.style}
            className="linear-wipe animate-scroll-text font-normal text-3xl md:font-[500] md:text-5xl text-center my-16 tracking-wide !leading-[1.25] md:!leading-[4rem]"
          >
            {t('contactUs')}
          </h1>
          <form action="" method="get" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 justify-start">
              <label
                htmlFor="email"
                className="text-[17px] font-[300] text-light-secondary"
              >
                {t('emailAddress')}
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="px-3 py-2 text-[17px] bg-dark-primary border border-light-secondary rounded-[0.2rem]"
              />
            </div>
            <div className="flex flex-col gap-2 justify-start">
              <label
                htmlFor="subject"
                className="text-[17px] font-[300] text-light-secondary"
              >
                {t('subject')}
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="px-3 py-2 text-[17px] bg-dark-primary border border-light-secondary rounded-[0.2rem]"
              />
            </div>
            <div className="flex flex-col gap-2 justify-start">
              <label
                htmlFor="message"
                className="text-[17px] font-[300] text-light-secondary"
              >
                {t('message')}
              </label>
              <textarea
                name="message"
                rows={4}
                id="message"
                className="px-3 py-2 text-[17px] bg-dark-primary border border-light-secondary rounded-[0.2rem]"
              />
            </div>
            <div className="flex md:justify-start justify-center w-full">
              <input
                type="submit"
                className="bg-btn-primary md:w-auto w-full cursor-pointer text-center md:px-10 py-4 md:py-3 text-base text-dark-primary font-[500] rounded-md hover:bg-transparent border border-btn-primary hover:text-btn-primary transition-all duration-300"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
