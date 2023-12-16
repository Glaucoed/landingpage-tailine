"use client";
import React, { useState } from "react";
import { DataNav } from "@/utils/data";

export default function Nav({ navOpen, HandleNavOpen }: any) {
  const [navSelection, setNavSelection] = useState("Inicio");

  return (
    <div
      className={`text-sm fixed items-center justify-center
       right-0 flex top-[10vh] flex-col gap-10 h-screen px-20 lg:bg-transparent bg-vermelho-500 transition-all lg:opacity-100 lg:relative lg:flex-row lg:h-auto lg:top-0 ${
         navOpen ? "z-40 opacity-100 " : "opacity-0 h-[70vh] hidden lg:flex"
       }`}
    >
      {DataNav.map((data, index) => (
        <a
          title={data.name}
          onClick={() => {
            setNavSelection(data.name);
            HandleNavOpen();
          }}
          className={`flex items-center gap-2 py-2 lg:pr-6 lg:py-1 hover:text-bege-400 ${
            navSelection === data.name
              ? "transition-all"
              : "border-0 border-black text-white"
          }`}
          href={data.url}
          key={index}
        >
          <span className="text-base"> {data.name}</span>
        </a>
      ))}
    </div>
  );
}
