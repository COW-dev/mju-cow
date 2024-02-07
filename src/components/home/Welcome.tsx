'use client';
import Typewriter from 'typewriter-effect';

export default function Welcome() {
  return (
    <section className="h-screen80 pt-20 font-semibold">
      <div className="text-right text-sm text-neutral-400 md:text-2xl">
        명지대학교 IT 서비스 개발 동아리 COW
      </div>
      <div className="mt-16 text-2xl font-bold md:mt-24 md:text-5xl">
        세상에 커밋하라:
      </div>
      <div className="mt-2 flex text-4xl font-extrabold tracking-tighter text-cowblue md:mt-4 md:text-8xl">
        <Typewriter
          options={{
            strings: ['Commit On World!'],
            autoStart: true,
            loop: true,
            delay: 75,
            cursorClassName: 'Typewriter__cursor font-normal text-white',
          }}
        />
      </div>
      <div className="mt-10 md:mt-16">
        <button className="border border-neutral-800 bg-cowblue px-4 py-2 text-base transition-opacity hover:opacity-50 md:px-8 md:py-4 md:text-2xl">
          <a href="#" target="_blank">
            3기 지원하기
          </a>
        </button>
      </div>
    </section>
  );
}
