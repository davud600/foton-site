import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-[90vw] bg-dark-primary ml-auto mr-auto">
      <div className="justify-between items-center flex flex-col p-8 h-full max-w-[1340px] ml-auto mr-auto">
        <div className="flex md:flex-row flex-col w-full justify-between">
          <div className="flex flex-col md:w-1/2 w-full gap-4">
            <Image src="" alt="logo" />
            <span className="text-light-secondary max-w-[35ch] text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              placeat soluta recusandae ducimus animi quibusdam, amet aliquam,
              earum quam id quae laboriosam quos voluptatibus magni hic
              cupiditate obcaecati quia accusantium.
            </span>
          </div>
          <div className="flex md:flex-row flex-col md:w-1/2 md:mt-0 w-full justify-start md:ml-48 md:gap-16">
            <div className="flex flex-col gap-2 md:mt-0 mt-12">
              <span className="text-light-primary tracking-wide">LINKS</span>
              <div className="flex flex-col gap-2 text-[15px]">
                <a
                  href=""
                  className="hover:text-light-primary text-light-secondary transition-all"
                >
                  link 1
                </a>
                <a
                  href=""
                  className="hover:text-light-primary text-light-secondary transition-all"
                >
                  link 2
                </a>
                <a
                  href=""
                  className="hover:text-light-primary text-light-secondary transition-all"
                >
                  link 3
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:mt-0 mt-12">
              <span className="text-light-primary tracking-wide">LINKS</span>
              <div className="flex flex-col gap-2 text-[15px]">
                <a
                  href=""
                  className="hover:text-light-primary text-light-secondary transition-all"
                >
                  link 1
                </a>
                <a
                  href=""
                  className="hover:text-light-primary text-light-secondary transition-all"
                >
                  link 2
                </a>
                <a
                  href=""
                  className="hover:text-light-primary text-light-secondary transition-all"
                >
                  link 3
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:mt-0 mt-12">
              <span className="text-light-primary tracking-wide">LINKS</span>
              <div className="flex flex-col gap-2 text-[15px]">
                <a
                  href=""
                  className="hover:text-light-primary text-light-secondary transition-all"
                >
                  link 1
                </a>
                <a
                  href=""
                  className="hover:text-light-primary text-light-secondary transition-all"
                >
                  link 2
                </a>
                <a
                  href=""
                  className="hover:text-light-primary text-light-secondary transition-all"
                >
                  link 3
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full bg-footer-divider border-none h-[1px] my-14" />
        <div className="flex w-full justify-start">
          <span className="text-light-primary">
            © 2023 Software Solutions, Registered in Kosovo. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
