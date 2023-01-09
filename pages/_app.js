import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
export default function App({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.js')
  }, []);

  return <Component {...pageProps} />
}
