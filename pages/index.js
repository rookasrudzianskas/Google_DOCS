import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Rookas Docs App</title>
        <link rel="icon" href="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.max-1100x1100.png" />
      </Head>


      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://byrookas.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} Rookas
        </a>
      </footer>
    </div>
  )
}
