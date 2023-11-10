import { Roboto } from 'next/font/google';
import { ReactNode } from 'react';

import GlobalProvider from '@common/components/GlobalProvider';

const inter = Roboto({ subsets: ['cyrillic'], weight: '500' });
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
