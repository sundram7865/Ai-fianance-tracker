"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-24 pb-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto flex flex-col items-center text-center space-y-6">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight gradient-title">
          Master Your Money with AI Precision
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
          Real-time insights that help you spend smarter, save better, and stay in control.


        </p>

        {/* CTA Button */}
        <Link href="/dashboard">
          <Button size="lg" className="px-8 py-5 text-lg">
            Get Started
          </Button>
        </Link>

        {/* Image */}
        <div className="hero-image-wrapper mt-10 w-full max-w-6xl px-4">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.png"
              width={1200}
              height={180}
              alt="Dashboard Preview"
              className="rounded-xl shadow-2xl border object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
