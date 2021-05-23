import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gilbert Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">Quick Start</h1>
      </main>
    </div>
  );
}
