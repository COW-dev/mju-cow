import Image from 'next/image';

const projects = [
  {
    id: 1,
    name: '졸업을 부탁해',
    explanation: '명지대학교 간편 졸업요건 검사 서비스',
    icon: '/mju-graduate.svg',
    href: 'https://mju-graduate.com',
    bg: 'bg-[#0C387D]',
  },
  {
    id: 2,
    name: '띵동',
    explanation: '명지대학교 동아리 통합 플랫폼',
    icon: '/ddingdong.svg',
    href: 'https://ddingdong.club',
    bg: 'bg-white',
  },
];

export default function Project() {
  return (
    <div className="w-full max-w-6xl px-6 py-32">
      <span className="bg-blue-100 px-2 py-1 text-base font-semibold text-blue-500 md:text-lg">
        PROJECT
      </span>
      <h1 className="mb-10 mt-2 text-2.5xl font-semibold leading-tight drop-shadow-sm sm:mb-14 sm:text-3xl md:text-4.5xl">
        카우의 프로젝트
      </h1>
      <ul className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3">
        {projects.map(({ id, href, icon, name, explanation, bg }) => (
          <li
            key={id}
            className={`flex justify-center border transition-opacity hover:opacity-70 ${bg}`}
          >
            <a
              href={href}
              target="_blank"
              className="relative block h-[120px] w-full sm:h-[150px] md:h-[180px]"
            >
              <Image src={icon} fill alt={name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
