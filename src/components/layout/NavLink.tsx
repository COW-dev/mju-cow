import Link from 'next/link';

interface NavLinkProps {
  value: string;
  href: string;
  isActive: boolean;
}

export default function NavLink({ value, href, isActive }: NavLinkProps) {
  return (
    <li
      className={`mr-7 last:mr-0 sm:mr-10 ${
        !isActive && 'opacity-50 transition-opacity hover:opacity-80'
      }`}
    >
      <Link href={href}>{value}</Link>
    </li>
  );
}
