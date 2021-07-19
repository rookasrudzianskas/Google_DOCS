import 'tailwindcss/tailwind.css'
import "@material-tailwind/react/tailwind.css";
import Head from 'next/head';
import {Provider} from "next-auth/client";
import "../style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
          />
          <title>Rookas Docs App</title>
          <link rel="icon" href="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.max-1100x1100.png" />
      </Head>
        {/* passing all the stuff to to the application*/}
        <Provider session={pageProps.session}>
            <Component {...pageProps} />
        </Provider>
    </>
  )
}

export default MyApp
