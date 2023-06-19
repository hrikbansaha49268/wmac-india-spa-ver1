import '../styles/globals.css';
import CustomNavbar from '../components/CustomNavbar';
import CustomFooter from '@/components/CustomFooter';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-gray-200'>
      <CustomNavbar />
      <Component {...pageProps} />
      <CustomFooter />
    </div>
  );
}

export default MyApp
