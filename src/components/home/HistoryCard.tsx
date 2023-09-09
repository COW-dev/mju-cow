interface HistoryCardProps {
  year: string | number;
  title: string;
  css?: string;
  children: React.ReactNode;
}

export default function HistoryCard({
  year,
  title,
  css,
  children,
}: HistoryCardProps) {
  return (
    <div
      className={`h-[9rem] text-base leading-tight backdrop-blur-md md:w-full md:text-lg ${css}`}
    >
      <div className="bg-[#535353] px-3 py-2 font-semibold text-white drop-shadow-sm md:px-4">
        <span className="mr-2 text-cyan100 md:mr-3">{year}</span>
        {title}
      </div>
      <div className="mt-2 break-keep font-medium">{children}</div>
    </div>
  );
}
