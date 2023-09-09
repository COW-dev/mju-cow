import Image from 'next/image';

export default function IndexSection() {
  return (
    <section className="flex h-screen w-full justify-center overflow-hidden bg-gradient-to-b from-white to-sky10">
      <h1 className="absolute z-10 mt-28 text-center drop-shadow-sm 2xl:mt-40">
        <div className="mb-2 text-3xl font-semibold sm:text-4xl md:mb-4 md:text-5xl">
          IT 서비스로 만들어가는
        </div>
        <div className="text-5xl font-bold sm:text-6xl md:text-7xl">
          더 나은{' '}
          <span className="bg-gradient-to-br from-cyan100 to-blue100 bg-clip-text text-transparent">
            명지
          </span>
        </div>
      </h1>
      <div className="relative h-full w-full max-w-6xl animate-bounce-slow">
        <div className="absolute -left-[48%] top-[10%] h-[38rem] w-[38rem] sm:-left-[25%] sm:h-[45rem] sm:w-[45rem] md:h-[50rem] md:w-[50rem] lg:-left-[25%] lg:top-[5%] lg:h-[60rem] lg:w-[60rem]">
          <Image src={'/boy1.svg'} fill priority alt="boy1" />
        </div>
        <div className="absolute -left-[25%] top-[55%] h-[33rem] w-[33rem] sm:left-[5%] sm:top-[45%] sm:h-[40rem] sm:w-[40rem] md:top-[40%] md:h-[45rem] md:w-[45rem] lg:left-[10%] lg:top-[28%] lg:h-[55rem] lg:w-[55rem]">
          <Image src={'/boy2.svg'} fill alt="boy2" />
        </div>
        <div className="absolute right-[30%] top-[55%] h-[10rem] w-[7rem] sm:right-[30%] sm:top-[45%] sm:h-[10rem] sm:w-[10rem] lg:right-[35%] lg:top-[35%] lg:h-[13rem] lg:w-[13rem]">
          <Image src={'/object.svg'} fill alt="object" />
        </div>
        <div className="absolute -right-[25%] top-[40%] h-[20rem] w-[20rem] sm:-right-[15%] sm:top-[25%] sm:h-[28rem] sm:w-[28rem] md:h-[30rem] md:w-[30rem] lg:-right-[18%] lg:top-[20%] lg:h-[40rem] lg:w-[40rem]">
          <Image src={'/girl.svg'} fill alt="girl" />
        </div>
      </div>
    </section>
  );
}
