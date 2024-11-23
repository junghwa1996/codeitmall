import Header from '@/components/Header';
import Container from '@/components/Container';
import '@/styles/global.css';
import { ThemeProvider } from '@/lib/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
