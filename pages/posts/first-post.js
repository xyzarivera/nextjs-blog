import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
    <Head>
      <title>First Post</title>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    </Head>
    <h1>First Post</h1>
    <h2>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </h2>
    </>
  )
}