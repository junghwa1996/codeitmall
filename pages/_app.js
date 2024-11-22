import Container from '@/components/Container';
import '@/styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Headers />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
