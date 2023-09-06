import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex h-40 items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-6xl items-center justify-between px-6">
        <div className="text-sm text-gray-500">
          <p>명지대학교 IT 서비스 개발 동아리 COW</p>
          <p>Copyrightⓒ 2023.COW. All rights reserved.</p>
        </div>
        <Image
          src={'/cow_logo.png'}
          width={40}
          height={40}
          alt="cow"
          className="opacity-60"
        />
      </div>
    </footer>
  );
}
