
export const metadata = {
  title: 'Meera Assistant',
  description: 'A virtual assistant powered by ChatGPT.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
