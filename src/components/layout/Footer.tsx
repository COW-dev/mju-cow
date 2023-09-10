import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex h-40 items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-6xl items-center justify-between px-6">
        <div className="text-xs text-gray-500 sm:text-sm">
          <p>명지대학교 IT 서비스 개발 동아리 COW</p>
          <p>Copyrightⓒ 2023.COW. All rights reserved.</p>
        </div>
        <div className="flex items-center">
          <a href="https://www.instagram.com/mju_cow/" target="_blank">
            <Image
              src={'/instagram_logo.svg'}
              width={88}
              height={40}
              alt="instagram_logo"
              className="mr-4 opacity-60 sm:mr-8"
            />
          </a>
          <Image
            src={'/cow_logo.png'}
            width={40}
            height={40}
            alt="cow"
            className="opacity-60"
          />
        </div>
      </div>
    </footer>
  );
}
