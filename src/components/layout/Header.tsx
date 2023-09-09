'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NavLink from './NavLink';

const navItems = [
  {
    id: 1,
    value: 'Home',
    href: '/',
  },
  {
    id: 2,
    value: 'Project',
    href: '/project',
  },
  {
    id: 3,
    value: 'Recruit',
    href: '/recruit',
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-center bg-white bg-opacity-40 backdrop-blur sm:h-18">
      <div className="flex w-full max-w-6xl justify-between px-6">
        <Link href={'/'} className="relative h-9 w-9 sm:h-10 sm:w-10">
          <Image
            src={'/cow_logo.png'}
            fill
            alt="cow"
            className="drop-shadow-sm"
          />
        </Link>
        <nav className="flex items-center">
          <ul className="flex text-base font-semibold sm:text-lg">
            {navItems.map(({ id, value, href }) => (
              <NavLink
                key={id}
                value={value}
                href={href}
                isActive={pathname === href}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
