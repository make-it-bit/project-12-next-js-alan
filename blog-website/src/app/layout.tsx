import './globals.css';
import Navbar from './components/Navbar';
import MyProfilePic from './components/MyProfilePic';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My blog',
  description: 'Created by Alan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
