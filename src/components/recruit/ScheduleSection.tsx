import Image from 'next/image';

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const cards = [
  {
    id: 1,
    value: '서류 접수',
    period: '09.04(월) ~ 09.13(수) 18시',
    border: 'border-l-sky100',
  },
  {
    id: 2,
    value: '서류 합격 발표',
    period: '09.13(수) 22시',
    border: 'border-l-yellow100',
  },
  {
    id: 3,
    value: '면접',
    period: '09.14(목) ~ 09.15(금)',
    border: 'border-l-purple100',
  },
  {
    id: 4,
    value: '서류 접수',
    period: '09.16(금)',
    border: 'border-l-pink100',
  },
];

export default function ScheduleSection() {
  return (
    <section className="flex w-full justify-center bg-gray-100">
      <div className="w-full max-w-6xl break-keep px-6 py-20 sm:py-24">
        <span className="bg-blue-100 px-2 py-1 text-base font-semibold text-blue-500 md:text-lg">
          SCHEDULE
        </span>
        <h2 className="mb-14 mt-2 text-2.5xl font-semibold drop-shadow sm:mb-18 sm:text-3xl md:text-4.5xl">
          모집 일정
        </h2>
        <ul className="mb-14 grid grid-cols-7 gap-y-4 sm:mb-18">
          {week.map((item, idx) => (
            <li key={idx} className="border-b-2">
              <div className="mb-3 text-sm font-semibold sm:text-lg lg:text-xl">
                {item}
              </div>
            </li>
          ))}
          <li className="font-medium">
            <div className="mb-4 text-sm sm:text-lg lg:text-xl">03</div>
            <div className="border-sky100 bg-sky100 whitespace-nowrap border-l-4 bg-opacity-10 py-1.5 pl-2 text-sm text-sky-600 sm:pl-3 sm:text-base lg:text-lg">
              서류 접수
            </div>
          </li>
          {['04', '05', '06', '07', '08', '09', '10', '11', '12', '13'].map(
            (item, idx) => (
              <li key={idx} className="font-medium">
                <div className="mb-4 text-sm sm:text-lg lg:text-xl">{item}</div>
                <div className="bg-sky100 mb-4 h-8 bg-opacity-10 text-sm text-sky-700 sm:h-9 sm:text-base lg:h-10 lg:text-lg" />
                {item === '13' && (
                  <div className="border-yellow100 bg-yellow100 border-l-4 bg-opacity-10 py-1.5 pl-2 text-sm text-yellow-700 sm:pl-3 sm:text-base lg:text-lg">
                    서류 합격 발표
                  </div>
                )}
              </li>
            ),
          )}
          <li className="font-medium">
            <div className="mb-4 text-sm sm:text-lg lg:text-xl">14</div>
            <div className="border-purple100 bg-purple100 border-l-4 bg-opacity-10 py-1.5 pl-2 text-sm text-purple-600 sm:pl-3 sm:text-base lg:text-lg">
              면접
            </div>
          </li>
          <li className="font-medium">
            <div className="mb-4 text-sm sm:text-lg lg:text-xl">15</div>
            <div className="bg-purple100 h-8 bg-opacity-10 text-purple-600 sm:h-9 lg:h-10" />
          </li>
          <li className="font-medium">
            <div className="mb-4 text-sm sm:text-lg lg:text-xl">14</div>
            <div className="border-pink100 bg-pink100 border-l-4 bg-opacity-10 py-1.5 pl-2 text-sm text-pink-600 sm:pl-3 sm:text-base lg:text-lg">
              결과 발표
            </div>
          </li>
        </ul>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {cards.map(({ id, value, period, border }) => (
            <li
              key={id}
              className={`border-l-[6px] bg-white px-5 py-4 text-base sm:px-8 sm:text-lg md:text-xl ${border}`}
            >
              <p className="mb-1 font-medium sm:mb-2">{value}</p>
              <p className="text-gray-600">{period}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
