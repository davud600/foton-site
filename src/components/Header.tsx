"use client";

import { useRef } from "react";

export default function Header() {
  const mobileLinksContainerRef = useRef<HTMLDivElement | null>(null);

  const toggleMobileNav = () => {
    if (!!!mobileLinksContainerRef.current) return;

    const top =
      mobileLinksContainerRef.current!.style.top === "-250px"
        ? "60px"
        : "-250px";
    const opacity =
      mobileLinksContainerRef.current!.style.opacity === "0" ? "1" : "0";

    mobileLinksContainerRef.current!.style.top = top;
    mobileLinksContainerRef.current!.style.opacity = opacity;
  };

  return (
    <nav className="bg-header-bg border-b-header-border border-b fixed w-screen top-0 h-[60px] backdrop-blur-lg">
      {/* Desktop */}
      <div className="justify-between items-center px-8 h-full max-w-[1340px] ml-auto mr-auto md:flex hidden">
        <img src="" alt="logo" />
        <div className="flex items-center h-full gap-8 text-base">
          <span>abc</span>
          <span>bca</span>
          <span>cab</span>
        </div>
        <button>something</button>
      </div>

      {/* Mobile */}
      <div className="justify-between items-center px-8 h-full max-w-[1340px] ml-auto mr-auto md:hidden flex">
        <img src="" alt="logo" />
        <div
          ref={mobileLinksContainerRef}
          className="flex-col flex w-screen absolute left-0 transition-all duration-300 -z-10 h-[250px] items-center justify-around text-base bg-dark-secondary py-8"
          style={{
            opacity: 0,
            top: "-250px",
          }}
        >
          <span>abc</span>
          <span>bca</span>
          <span>cab</span>
        </div>
        <button onClick={toggleMobileNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            className="fill-white h-6 w-6"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
