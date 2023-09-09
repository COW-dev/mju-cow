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
      <div className="relative h-full w-full max-w-6xl animate-bounce-slow"></div>
    </section>
  );
}
