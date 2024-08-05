import Navbar from '@/components/navbar';


export const metadata = {
  title: 'BetBrokers',
  description: 'Your go-to sports betting platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
