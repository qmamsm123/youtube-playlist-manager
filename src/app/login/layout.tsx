export default function LoginPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-screen h-[calc(100vh-4rem)] flex justify-center items-center">
      {children}
    </main>
  );
}
