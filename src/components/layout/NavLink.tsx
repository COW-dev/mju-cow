import Link from 'next/link';

interface NavLinkProps {
  value: string;
  href: string;
  isActive: boolean;
}

export default function NavLink({ value, href, isActive }: NavLinkProps) {
  return (
    <li
      className={`mx-5 ${
        !isActive && 'opacity-50 transition-opacity hover:opacity-80'
      }`}
    >
      <Link href={href}>{value}</Link>
    </li>
  );
}
