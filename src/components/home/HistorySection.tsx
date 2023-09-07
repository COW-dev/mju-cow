import Image from 'next/image';
import HistoryCard from './HistoryCard';

const historiesLeft = [
  {
    id: 1,
    year: 2019,
    title: '신입생 전공 학습 소모임 DOS',
    content: (
      <>
        <p>3월 - 데이터테크놀로지전공 학습 소모임 DOS 설립</p>
        <p>9월 - 융합소프트웨어 전공 학술학회 등록</p>
        <p>+ 신입생 전공 스터디 운영</p>
      </>
    ),
  },
  {
    id: 2,
    year: 2022,
    title: '웹 개발 학술학회 COW',
    content: (
      <>
        <p>3월 - 융합소프트웨어학부 웹 개발 학술학회 COW로 전환</p>
        <p>+ 웹 개발 커리큘럼 기획 및 운영, 교내 서비스 개발(졸업을 부탁해)</p>
      </>
    ),
  },
];

const historiesRight = [
  {
    id: 3,
    year: 2020,
    title: '전공 학술학회 COIN',
    content: (
      <>
        <p>3월 - 데이터테크놀로지전공 학술학회 COIN으로 전환</p>
        <p>+ 전학년 전공 스터디 및 멘토링 운영</p>
      </>
    ),
  },
  {
    id: 4,
    year: 2023,
    title: 'IT 서비스 개발 동아리 COW',
    content: (
      <>
        <p>7월 - 명지대학교 준동아리 등록</p>
        <p>+ 웹 개발 커리큘럼 운영, 교내 서비스 개발(띵동)</p>
      </>
    ),
  },
];

const histories = [...historiesLeft, ...historiesRight].sort(
  (a, b) => a.year - b.year,
);

export default function HistorySection() {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-6xl flex-col justify-center gap-18 px-6 py-24">
        <div className="text-right font-semibold">
          <span className="bg-blue-100 px-2 py-1 text-base font-semibold text-blue-500 md:text-lg">
            HISTORY
          </span>
          <h3 className="mt-2 text-2.5xl leading-tight drop-shadow sm:text-3xl md:text-4.5xl">
            카우가 걸어온 길
          </h3>
        </div>
        <div className="hidden justify-center sm:flex">
          <div className="flex w-[45%] flex-col items-end gap-[9rem]">
            {historiesLeft.map(({ id, year, title, content }) => (
              <HistoryCard key={id} year={year} title={title}>
                {content}
              </HistoryCard>
            ))}
          </div>
          <div className="relative h-[36rem] w-[5rem] drop-shadow md:w-[6rem]">
            <Image src={'/history.svg'} fill alt="line" />
          </div>
          <div className="mt-[9rem] flex w-[45%] flex-col items-start gap-[9rem]">
            {historiesRight.map(({ id, year, title, content }) => (
              <HistoryCard key={id} year={year} title={title}>
                {content}
              </HistoryCard>
            ))}
          </div>
        </div>
        <div className="flex justify-center sm:hidden">
          <div className="relative h-[36rem] w-[4rem] drop-shadow">
            <Image src={'/history.svg'} fill alt="line" />
          </div>
          <div className="flex w-full max-w-md flex-col">
            {histories.map(({ id, year, title, content }) => (
              <HistoryCard key={id} year={year} title={title}>
                {content}
              </HistoryCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
