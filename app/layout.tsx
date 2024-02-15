import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
/* import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Script from 'next/script';
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head>
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous"></Script>
      </head> */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
