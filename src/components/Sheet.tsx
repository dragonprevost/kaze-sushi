export default function Sheet({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white rounded p-4 border border-neutral-200">
      {children}
    </div>
  );
}
