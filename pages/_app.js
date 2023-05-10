import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from "@fortawesome/free-brands-svg-icons";
import ErrorBoundary from 'components/ErrorBoundary'

const { library } = require('@fortawesome/fontawesome-svg-core');

library.add(fas, fab);

function Application({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}

export default Application
