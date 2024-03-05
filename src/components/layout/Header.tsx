import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex h-14 w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur md:h-16">
      <div className="w-full px-8 text-xl font-bold md:max-w-screen-xl md:px-14 md:text-2xl">
        <div className="relative h-10 w-10 md:h-11 md:w-11">
          <Image src={'/icon/logo.png'} fill={true} alt="cow-logo" />
        </div>
      </div>
    </header>
  );
}
