import Image from 'next/image';

export default function IndexSection() {
  return (
    <section className="flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white to-blue-200">
      <div className="mb-20 flex w-full max-w-6xl flex-col items-center justify-between px-12 sm:flex-row">
        <div className="text-xl md:text-2xl lg:text-3xl">
          <span className="bg-indigo-200 px-2 py-1 text-base font-semibold text-indigo-500 lg:text-lg">
            RECRUIT
          </span>
          <h1 className="my-3 text-3xl font-bold drop-shadow sm:text-4xl md:my-4 md:text-5xl lg:text-6xl">
            카우{' '}
            <span className="bg-gradient-to-br from-cyan100 to-blue100 bg-clip-text text-transparent">
              2기{' '}
            </span>
            모집 중!
          </h1>
          <h2 className="mb-3 font-semibold md:mb-6">
            우리와 함께 더 나은 명지를 <br /> 만들어 갈 인재를 기다립니다
          </h2>
          <h3 className="font-medium text-gray-500">09.03 – 09.16</h3>
        </div>
        <div className="relative h-[15rem] w-[15rem] drop-shadow md:h-[20rem] md:w-[20rem] lg:h-[28rem] lg:w-[28rem]">
          <Image src={'/browser.svg'} fill alt="browser" />
        </div>
      </div>
      <div className="absolute bottom-[10%] h-8 w-8 animate-bounce opacity-30 drop-shadow">
        <Image src={'/down-arrow.svg'} fill alt="arrow" />
      </div>
    </section>
  );
}
