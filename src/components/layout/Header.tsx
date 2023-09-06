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
    <header className="fixed left-0 top-0 z-50 flex h-18 w-full items-center justify-center bg-white bg-opacity-40 backdrop-blur">
      <div className="flex w-full max-w-6xl justify-between">
        <Link href={'/'} className="ml-5">
          <Image
            src={'/cow_logo.png'}
            width={40}
            height={40}
            alt="cow"
            className="drop-shadow"
          />
        </Link>
        <nav className="flex items-center">
          <ul className="flex text-lg font-semibold">
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
