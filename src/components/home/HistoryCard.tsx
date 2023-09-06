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
      className={`h-[9rem] text-base font-medium leading-tight drop-shadow backdrop-blur-md md:w-full md:text-lg ${css}`}
    >
      <div className="bg-[#535353] px-3 py-2 text-white md:px-4">
        <span className="mr-2 text-cyan100 md:mr-4">{year}</span>
        {title}
      </div>
      <div className="mt-2 break-keep">{children}</div>
    </div>
  );
}
