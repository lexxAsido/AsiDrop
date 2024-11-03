import { Montserrat, Pacifico} from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weights: ['300', '500', '900'], 
});

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400', 
});

export const metadata = {
  title: 'AsiDrop',
  description: 'Making delivery seamless and stress-free',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  );
}
