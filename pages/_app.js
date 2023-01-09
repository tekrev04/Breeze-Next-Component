import '../styles/tailwind.config.css'
import 'tailwindcss/tailwind.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/App.css';
import { useEffect } from 'react';
export default function App({ Component, pageProps }) {

   useEffect(() => {
        import ('bootstrap/dist/js/bootstrap.js')
    }, []);
    
  return <Component {...pageProps} />
}
