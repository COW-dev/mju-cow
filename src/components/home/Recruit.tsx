import SubHeader from './SubHeader';

type Schedule = { date: string; content: string };

const schedules: Array<Schedule> = [
  {
    date: '02.26(월)-03.08(금)',
    content: '서류 제출',
  },
  {
    date: '03.10(일)',
    content: '서류 합격 발표',
  },
  {
    date: '03.12(화)-03.14(목)',
    content: '인터뷰 진행',
  },
  {
    date: '03.16(토)',
    content: '결과 발표',
  },
  {
    date: '03.20(수)',
    content: '개강총회 및 OT',
  },
];

export default function Recruit() {
  return (
    <section className="h-screen80 md:h-screen">
      <SubHeader content="모집 일정" />
      <ul className="mt-16 md:mt-20">
        {schedules.map(({ date, content }, idx) => (
          <li
            key={idx}
            className="mb-5 flex flex-col text-lg md:mb-10 md:flex-row md:text-2xl"
          >
            <div className="text-neutral-400 md:w-72">{date}</div>
            <div>{content}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
