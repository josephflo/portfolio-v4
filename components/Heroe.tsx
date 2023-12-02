"use client";

import { Card, CardContent, Avatar, Typography, Button } from "@mui/material";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  //HandleButton
  const handleScroll = () => {
    const nextSection = document.getElementById("about");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { text } = useTypewriter({
    words: [
      "Fullstack Web Developer.",
      "Frontend Web Developer.",
      "Backend Web Developer.",
      "Nextjs Web Developer.",
    ],
    loop: 0,
    typeSpeed: 25,
    deleteSpeed: 25,
    delaySpeed: 3000,
  });

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-4/5 my-4 min-h-[90vh] mx-auto flex items-center justify-center">
      <div className="hidden lg:block ">
        <Image
          src="/computer.png"
          alt="computerpng"
          height={800}
          width={800}
        />
        <h1 className="text-4xl font-bold text-white mb-12 absolute top-48 mt-10 ml-28">
          {">"} Hi 👋, I'm Joseph,{" "}
        </h1>

        <h1 className="text-4xl font-bold text-white absolute mt-14 top-56 ml-28">
          {text}
          <Cursor />
        </h1>
        <button
        className="bg-purple-500 border-2 p-3 text-white rounded-lg absolute top-60 ml-80 mt-28 left-72"
        type="button"
        onClick={handleScroll}
        >Know More</button>
      </div>
      <div className="lg:hidden absolute">
        <h1 className="text-4xl font-bold text-white mb-2">
          {">"} Hi 👋, I'm Joseph,{" "}
        </h1>
        <h1 className="text-3xl font-bold text-white ">
          {text}
          <Cursor />
        </h1>
      </div>

      {/* <div className="hidden lg:block p-6">
        <Image src="/computer.png" alt="computerpng" height={800} width={800} />
      </div> */}
      <div className="lg:hidden p-10">
        <Image src="/phone2.png" alt="phonepng" height={200} width={400} />
      </div>
    </div>
  );
};

export default Hero;
