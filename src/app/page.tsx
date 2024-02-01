'use client';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <main className="pt-16 font-semibold md:pt-20">
      <div className="text-right text-sm text-neutral-500 md:text-2xl">
        명지대학교 IT 서비스 개발 동아리 COW
      </div>
      <div className="mt-16 text-xl md:mt-24 md:text-5xl">세상에 커밋하라:</div>
      <div className="text-cowblue mt-2 flex text-4xl font-bold tracking-tighter md:mt-4 md:text-8xl">
        <Typewriter
          options={{
            strings: ['Commit On World!'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="mt-8 md:mt-14">
        <button className="bg-cowblue border border-neutral-800 px-4 py-2 text-base transition-opacity hover:opacity-50 md:px-8 md:py-4 md:text-2xl">
          <a href="https://www.naver.com" target="_blank">
            3기 지원하기
          </a>
        </button>
      </div>
      <div className="mt-36 flex w-full justify-center opacity-50">
        <Image
          src={'/icon/down-arrow.png'}
          alt="down-arrow"
          width={48}
          height={48}
        />
      </div>
    </main>
  );
}
