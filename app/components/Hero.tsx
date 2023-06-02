"use client";
import Image from "next/image";
import React, { useRef, useState, useContext, useCallback } from "react";
import { ScrollContext } from "../utils/scroll-observer";

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }
  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);
  return (
    <div
      ref={refContainer}
      style={{ transform: `translateY(-${progress * 20}vh)` }}
      className="min-h-screen w-full flex flex-col justify-center items-center sticky top-0 -z-10"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover -z-10"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="mx-auto font-bold w-full h-full flex flex-1 flex-col justify-between items-center text-black gap-4">
        <span className="px-">
          <Image
            src="/vercel.svg"
            alt="logo"
            width={80}
            height={80}
            className="flex-grow-0 pt-10 transition-opacity duration-500"
          />
        </span>
        <div className="mx-auto w-full flex flex-col gap-4 justify-center items-center">
          <h1 className="text-4xl xl:text-6xl">Parallax website</h1>
          <h2 className="text-2xl xl:text-4xl">Case for studying</h2>
        </div>
        <span
          className={`flex-grow-0 pb-10 transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2rem"
            viewBox="0 0 512 512"
            onLoad={handleImageLoaded}
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Hero;
