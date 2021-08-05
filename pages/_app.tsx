import type { AppProps } from 'next/app'
import '../src/style/app.styl'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
