const information = [
  {
    id: 1,
    name: (
      <>
        정기 모임 <span className="font-normal text-red-500">*</span>
      </>
    ),
    content: '격주 수요일 18시에 대면으로 정기 모임을 진행합니다.',
  },
  {
    id: 2,
    name: (
      <>
        조 모임 <span className="font-normal text-red-500">*</span>
      </>
    ),
    content:
      '주 1회 대면 혹은 비대면으로 조 모임을 진행합니다.(장소 및 시간은 조별 협의)',
  },
  {
    id: 3,
    name: (
      <>
        보증금 <span className="font-normal text-red-500">*</span>
      </>
    ),
    content: (
      <>
        학기당 3만원(활동비 1.5만원 + 보증금 1.5만원)의 보증금이 필요합니다.
        <br />
        활동비는 동아리 활동 및 서비스 운영에 사용되며, 모임통장을 통해 사용
        내역이 투명하게 공개됩니다.
        <br />
        보증금은 코스 수료 혹은 프로젝트에 참여할 경우 환급됩니다.
      </>
    ),
  },
];

export default function InformationSection() {
  return (
    <section className="flex w-full justify-center">
      <div className="w-full max-w-6xl break-keep px-6 py-20 sm:py-24">
        <span className="bg-blue-100 px-2 py-1 text-base font-semibold text-blue-500 md:text-lg">
          INFORMATION
        </span>
        <h2 className="mb-10 mt-2 text-2.5xl font-semibold drop-shadow sm:mb-14 sm:text-3xl md:text-4.5xl">
          활동 관련 안내 사항
        </h2>
        <ul className="grid grid-cols-1 gap-y-10 bg-gray-50 p-6 sm:grid-cols-2">
          {information.map(({ id, name, content }) => (
            <li key={id}>
              <h3 className="mb-1 text-xl font-semibold sm:mb-2 sm:text-2xl">
                {name}
              </h3>
              <div className="text-base font-medium text-gray-600 sm:text-lg">
                {content}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
