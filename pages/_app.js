import Head from 'next/head';
import Header from '@/components/Header';
import Container from '@/components/Container';
import '@/styles/global.css';
import { ThemeProvider } from '@/lib/ThemeContext';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700'],
  subsets: [],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Codeitmall</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <ThemeProvider>
        <div className={notoSansKR.className}>
          <Header />
          <Container>
            <Component {...pageProps} />
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
}
