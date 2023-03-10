import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import localFont from 'next/font/local'

const beVetnanPro = localFont({
  src: [
    {
      path: '../public/fonts/BeVietnamPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/BeVietnamPro-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/BeVietnamPro-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/BeVietnamPro-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})

function MyApp({Component, pageProps}: AppProps) {
  return (
    <main className={beVetnanPro.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
