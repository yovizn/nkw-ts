"use client";

import { Container } from "@components/container";
import { Hero, HeroSubTitle, HeroTitle } from "@components/hero";
import React, { useLayoutEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      // setTimeout(() => {
      //   setIsLoading(false);
      //   document.body.style.cursor = "default";
      //   window.scrollTo(0, 0);
      // }, 2500);
    })();
  }, []);

  return (
    <main>
      {/* <AnimatePresence mode="wait">
        {isLoading && <div className="h-screen"></div>}
      </AnimatePresence> */}
      <div className="relative w-full h-screen">
        
      </div>
      <Container>
        <Hero>
          <HeroTitle>
            Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit.
          </HeroTitle>
          <HeroSubTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at
            quia. Non repudiandae in enim.
          </HeroSubTitle>
        </Hero>

        <div className="h-screen border border-primary"></div>
        <div className="h-screen"></div>
      </Container>
    </main>
  );
}
