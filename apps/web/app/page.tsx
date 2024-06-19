"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/Sparkle";
import { FlipWords } from "@/components/ui/FlipWords";
import ShrimerButton from "@/components/ui/Buttons/ShrimerButton";

function page() {
  const words = [
    "Write your Feelings.",
    "Express to the World.",
    "Learn from other's mistakes.",
  ];
  return (
    <div className="h-dvh w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <h1 className="md:text-7xl text-5xl lg:text-9xl font-bold text-center text-white relative z-50">
        The Journal Me
      </h1>
      <div className="w-[40rem] h-40 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1000}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <FlipWords
        className="md:text-3xl text-2xl lg:text-5xl font-medium lowercase"
        words={words}
      />{" "}
      <br />
      <ShrimerButton>Get Started</ShrimerButton>
    </div>
  );
}

export default page;
