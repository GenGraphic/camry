import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import localFonts from 'next/font/local';

const myFont = localFonts({src: '../public/Chewy-Regular.ttf'})

export default function App({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
    
  )
}
