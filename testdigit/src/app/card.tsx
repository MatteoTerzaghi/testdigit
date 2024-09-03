export default function Card({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-white rounded border shadow">{children}</div>;
}
