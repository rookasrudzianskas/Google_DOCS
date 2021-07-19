import Head from 'next/head'
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Rookas Docs App</title>
        <link rel="icon" href="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.max-1100x1100.png" />
      </Head>

        <Header />

        <section className="bg-[#F8F9FA] pb-10 px-10">
            <div className="max-w-3xl mx-auto">
                <div className="py-6">
                    <h2>Start a new document</h2>
                </div>
            </div>
        </section>






















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
