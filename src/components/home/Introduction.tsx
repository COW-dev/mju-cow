'use client';
import React, { useState, useEffect } from 'react';

export default function Introduction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 450;
      setIsVisible(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="h-screen80 md:py-36">
      <div className="flex h-full w-full flex-col items-center justify-center text-xl md:text-4xl">
        <div className="text-neutral-400">카우는 모두가 함께</div>
        <div
          className={`fade-in md:pt-18 pb-11 pt-10 text-4xl font-extrabold md:pb-20 md:text-8xl ${isVisible ? 'opacity-100' : ''}`}
        >
          Growth
        </div>
        <div className="text-neutral-400">성장하는 동아리입니다.</div>
      </div>
    </section>
  );
}
