import Image from 'next/image';

const ideals = [
  {
    id: 1,
    value: '프로그래밍에 관심 있으신 분',
  },
  {
    id: 2,
    value: '능동적인 태도로 참여하실 수 있으신 분',
  },
  {
    id: 3,
    value: 'IT 서비스로 학교 생활을 더욱 즐겁게 만들어 보고 싶으신 분',
  },
];

export default function IdealSection() {
  return (
    <section className="flex w-full justify-center bg-gray-50">
      <div className="w-full max-w-6xl break-keep px-6 py-20 sm:py-24">
        <div className="md:w-auto">
          <span className="bg-blue-100 px-2 py-1 text-base font-semibold text-blue-500 md:text-lg">
            IDEAL
          </span>
          <h2 className="mb-14 mt-2 text-2.5xl font-semibold drop-shadow-sm sm:mb-18 sm:text-3xl md:text-4.5xl">
            이런 분과 함께하고 싶어요!
          </h2>
          <ul>
            {ideals.map(({ id, value }) => (
              <li
                key={id}
                className="mb-2 text-lg font-medium leading-snug text-gray-600 sm:text-xl md:text-2xl"
              >
                <span className="mr-3 text-blue-500 sm:mr-4">{id}</span>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
