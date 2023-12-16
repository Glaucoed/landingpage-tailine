'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";

export default function Nav() {
  
  const [isMobile, setIsMobile] = useState(false);
  const [openHamburguer, setOpenHamburguer] = useState(false);

  const handleOpenHamburguer = () => {
    setOpenHamburguer(!openHamburguer);
  };

  useEffect(() => {
    async function checkIsMobile() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", checkIsMobile);

    checkIsMobile();

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  
  return (
    <div 
      className="bg-vermelho-500 w-full h-24 flex items-center justify-between px-10 drop-shadow-sm fixed z-50" 
      // style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}
      style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}
    >
      <div>
        <Image src="/logo.png" alt="Tailine Lash & Nails" width={80} height={80} />
      </div>
      <div className="flex gap-10 text-bege-100  uppercase ">
      <nav
        className="flex justify-start pl-4 lg:pl-0 lg:justify-around text-white h-12 items-center"
      >
        <div
          onClick={handleOpenHamburguer}
          className="w-10 h-10 p-2 flex flex-col cursor-pointer hover:bg-zinc-700  rounded-full justify-center gap-[6px] opacity-60 lg:hidden"
        >
          <div
            className={`${
              openHamburguer
                ? "relative top-1 transition-all rotate-45"
                : "transition-all"
            }`}
          >
            <HamburguerStyle />
          </div>
          {!openHamburguer && <HamburguerStyle />}
          <div
            className={`${
              openHamburguer
                ? "relative bottom-1 transition-all rotate-[-45deg]"
                : "transition-all"
            }`}
          >
            <HamburguerStyle />
          </div>
        </div>
        <div
          className={`${
            isMobile && "hidden"
          } flex gap-2 items-center text-xs lg:text-base`}
        >
        </div>

        <NavBar HandleNavOpen={handleOpenHamburguer} navOpen={openHamburguer} />

      </nav>
      </div>
    </div>
  );
}

const HamburguerStyle = () => {
  return <div className="h-[2px] rounded-2xl bg-white"></div>;
};
