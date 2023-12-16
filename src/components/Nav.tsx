import React from "react";
import Image from "next/image";

export default function Nav() {
  return (
    <div 
      className="bg-vermelho-500 w-full h-24 flex items-center justify-between px-10 drop-shadow-sm fixed" 
      // style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}
      style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}
    >
      <div>
        <Image src="/logo.png" alt="Tailine Lash & Nails" width={80} height={80} />
      </div>
      <div>
        <h1>Menu</h1>
      </div>
    </div>
  );
}