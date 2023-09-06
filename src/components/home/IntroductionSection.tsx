import Image from 'next/image';

const activities = [
  {
    id: 1,
    name: '학우들과의 네트워킹',
    icon: '/heart.svg',
  },
  {
    id: 2,
    name: '파트별 교육 세션',
    icon: '/pencil.svg',
  },
  {
    id: 3,
    name: '자율 그룹 스터디',
    icon: '/team.svg',
  },
  {
    id: 4,
    name: '프로젝트 개발',
    icon: '/all-in-one-computer.svg',
  },
];

export default function IntroductionSection() {
  return (
    <section className="flex w-full flex-col items-center bg-gray-50 py-18 font-semibold md:py-24">
      <div className="mb-5 w-full max-w-6xl px-6 md:mb-10">
        <p className="text-base text-gray-400 md:text-lg">INTRODUCTION</p>
        <h2 className="mb-18 text-2.5xl leading-tight drop-shadow sm:text-3xl md:mb-32 md:text-4.5xl">
          카우는 함께 공유하며 성장하는 <br /> IT 서비스 개발 동아리입니다
        </h2>
        <div className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 xl:grid-cols-4">
          {activities.map(({ id, name, icon }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center drop-shadow"
            >
              <div className="relative mb-6 h-18 w-18 md:mb-8 md:h-24 md:w-24">
                <Image src={icon} fill alt="vacation" />
              </div>
              <p className="text-xl font-medium text-gray-500 md:text-2xl">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
