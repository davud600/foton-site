import { outfit } from '@/utils/fonts'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section id="home" className="min-h-screen w-full bg-dark-background">
        <div className="ml-auto mr-auto md:max-w-lg max-w-[90vw] md:mt-[15%] mt-[40%]">
          <h1
            style={outfit.style}
            className="linear-wipe animate-scroll-text font-normal text-3xl md:font-[500] md:text-5xl text-center my-16 tracking-wide !leading-[1.25] md:!leading-[4rem]"
          >
            Follow the light.
            <br />
            with us
          </h1>
          <p className="animate-scroll-text text-center text-[15px] text-light-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            adipisci rerum cupiditate optio reprehenderit dolore incidunt
            veritatis, aut nihil, exercitationem molestiae odit temporibus
            culpa, est quod quos accusamus ex voluptatum.
          </p>
          <div className="flex md:flex-row flex-col justify-center gap-8 w-full my-10">
            <a
              href="#projects"
              className="bg-transparent border text-center border-color-border-color-primary md:px-10 py-4 md:py-3 text-[15px] text-light-primary font-[500] rounded-md hover:bg-light-primary hover:text-dark-primary transition-all duration-300"
            >
              Other Action
            </a>
            <a
              href="#services"
              className="bg-btn-primary text-center md:px-10 py-4 md:py-3 text-[15px] text-light-primary font-[500] rounded-md hover:bg-btn-secondary hvoer:text-dark-secondary transition-all duration-300"
            >
              Call To Action
            </a>
          </div>
          <div className="flex justify-center w-full">
            <a
              href="#"
              className="text-base text-light-primary font-[500] underline underline-offset-2"
            >
              Link to redirect to somewhere
            </a>
          </div>
        </div>
      </section>
      <section id="services" className="min-h-screen w-full bg-dark-background">
        <div className="flex justify-center items-center w-full h-full relative mt-[200px] md:mt-[115px]">
          <Image
            src="/macbook.webp"
            width={2202}
            height={1262}
            className="w-[85vw] h-auto relative"
            alt="macbook"
            objectFit="scale-down"
          />
        </div>
      </section>
      <section id="projects"></section>
      <section id="about" className="min-h-screen w-full bg-dark-background">
        <div className="ml-auto mr-auto md:max-w-lg max-w-[90vw] md:mt-[25%] mt-[50%]">
          <h1
            style={outfit.style}
            className="animate-scroll-text font-normal text-3xl md:font-[500] md:text-5xl text-center my-16 tracking-wide !leading-[1.25] md:!leading-[4rem]"
          >
            About Us
          </h1>
          <p className="animate-scroll-text text-center text-[15px] text-light-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            itaque incidunt et consequatur magnam, rerum recusandae ipsam
            nesciunt soluta exercitationem quae sed repellendus provident, ipsum
            eaque eligendi! Maxime, quisquam molestiae!
          </p>
        </div>
      </section>
      <section id="contact" className="min-h-screen w-full bg-dark-background">
        <div className="ml-auto mr-auto md:max-w-lg max-w-[90vw] md:mt-[10%] mt-[25%]">
          <h1
            style={outfit.style}
            className="animate-scroll-text font-normal text-3xl md:font-[500] md:text-5xl text-center my-16 tracking-wide !leading-[1.25] md:!leading-[4rem]"
          >
            Contact us
          </h1>
          <form action="" method="get" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 justify-start">
              <label
                htmlFor="email"
                className="text-[17px] font-[300] text-light-secondary"
              >
                E-mail Address
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
                Subject
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
                Message
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
                className="bg-btn-primary md:w-auto w-full cursor-pointer text-center md:px-10 py-4 md:py-3 text-base text-light-primary font-[500] rounded-md hover:bg-btn-secondary hvoer:text-dark-secondary transition-all duration-300"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
