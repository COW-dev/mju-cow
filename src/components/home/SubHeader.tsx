export default function SubHeader({
  content,
}: Readonly<{
  content: string;
}>) {
  return <h2 className="text-3xl font-semibold md:text-5xl">{content}</h2>;
}
