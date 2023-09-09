const tracks = [
  {
    id: 1,
    name: 'Level 1(입문)',
    content: (
      <p>
        웹의 기초를 학습하고, HTML과 CSS를 활용하여 나만의 웹사이트를 만들어
        봅니다.
      </p>
    ),
  },
  {
    id: 2,
    name: 'Level 2(심화)',
    content: (
      <>
        <p className="mb-2">
          4개월간의 프리코스 이후, 2개월간 토이 프로젝트를 진행합니다. 본 과정을
          수료한 후, Level 3으로 전환됩니다.
        </p>
        <span className="mr-2 bg-sky-100 px-1.5 py-0.5 text-sm text-sky-500 sm:text-base">
          React.js
        </span>
        <span className="bg-green-100 px-1.5 py-0.5 text-sm text-green-500 sm:text-base">
          Spring
        </span>
      </>
    ),
  },
  {
    id: 3,
    name: 'Level 3(프로젝트)',
    content: (
      <>
        <p className="mb-2">
          다른 파트의 개발자 및 기획자와 팀을 구성해 함께 서비스를 개발합니다.
        </p>
        <span className="mr-2 bg-sky-100 px-1.5 py-0.5 text-sm text-sky-500 sm:text-base">
          React.js
        </span>
        <span className="bg-green-100 px-1.5 py-0.5 text-sm text-green-500 sm:text-base">
          Spring
        </span>
      </>
    ),
  },
  {
    id: 4,
    name: '기획 & 디자인',
    content: (
      <>
        <p className="mb-2">
          개발자들과 함께 서비스를 기획하고 디자인합니다. 서비스 기획부터
          런칭까지 모든 프로세스를 관리합니다.
        </p>
        <span className="mr-2 bg-purple-100 px-1.5 py-0.5 text-sm text-purple-500 sm:text-base">
          PM
        </span>
        <span className="bg-pink-100 px-1.5 py-0.5 text-sm text-pink-500 sm:text-base">
          UX/UI
        </span>
      </>
    ),
  },
];
export default function TrackSection() {
  return (
    <section className="flex w-full justify-center">
      <div className="w-full max-w-6xl break-keep px-6 py-20 sm:py-24">
        <span className="bg-blue-100 px-2 py-1 text-base font-semibold text-blue-500 md:text-lg">
          TRACK
        </span>
        <h2 className="mb-8 mt-2 text-2.5xl font-semibold drop-shadow-sm sm:mb-10 sm:text-3xl md:text-4.5xl">
          모집 분야
        </h2>
        <ul className="grid grid-cols-1 gap-10 bg-gray-50 p-6 sm:grid-cols-2 md:grid-cols-3">
          {tracks.map(({ id, name, content }) => (
            <li key={id} className="">
              <div className="mb-2 text-xl font-semibold md:text-2xl">
                {name}
              </div>
              <div className="text-base font-medium leading-snug text-gray-600 md:text-lg">
                {content}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
