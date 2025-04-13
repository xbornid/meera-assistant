export const metadata = {
  title: 'Meera Assistant',
  description: 'A virtual assistant powered by ChatGPT.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
