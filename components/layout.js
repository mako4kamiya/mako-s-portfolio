import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Mako's Portfolio</title>
      </Head>
      <main>{children}</main>
    </>
  )
}