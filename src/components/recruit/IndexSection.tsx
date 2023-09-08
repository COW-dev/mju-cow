import Image from 'next/image';

export default function IndexSection() {
  return (
    <section className="flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white to-blue-200">
      <div className="mb-14 flex w-full max-w-6xl flex-col items-center justify-between px-12 sm:mb-20 sm:flex-row">
        <div className="mb-14 flex w-full flex-col items-start text-xl sm:mb-0 sm:w-auto sm:text-2xl lg:text-3xl">
          <span className="bg-indigo-200 px-2 py-0.5 text-base font-semibold text-indigo-500 md:text-lg">
            RECRUIT
          </span>
          <h1 className="my-3 text-3xl font-bold drop-shadow sm:text-4xl md:my-4 md:text-5xl lg:text-6xl">
            카우{' '}
            <span className="bg-gradient-to-br from-cyan100 to-blue100 bg-clip-text text-transparent">
              2기{' '}
            </span>
            모집 중!
          </h1>
          <h2 className="mb-3 font-semibold leading-tight">
            우리와 함께 더 나은 명지를 <br /> 만들어 갈 열정을 기다립니다
          </h2>
          <p className="mb-4 font-medium leading-tight text-gray-500 md:mb-6">
            09.03 – 09.16
          </p>
          <a
            href="https://forms.gle/bPXZfdA6cQeT5Hhh6"
            target="_blank"
            className="block bg-blue-500 px-8 py-2.5 text-lg font-semibold text-white transition-colors hover:bg-blue-400 sm:text-xl md:px-10 md:py-3.5 md:text-2xl"
          >
            지원하기!
          </a>
        </div>
        <div className="relative h-[7rem] w-[7rem] drop-shadow sm:h-[12rem] sm:w-[12rem] lg:h-[17rem] lg:w-[17rem]">
          <Image src={'/cow_logo.svg'} fill priority alt="cow" />
        </div>
      </div>
      <div className="absolute bottom-[10%] h-6 w-6 animate-bounce opacity-30 drop-shadow sm:h-8 sm:w-8">
        <Image src={'/down-arrow.svg'} fill alt="arrow" />
      </div>
    </section>
  );
}
