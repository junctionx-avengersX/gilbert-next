import Head from "next/head";
import MainScreen from "screens/MainScreen";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gilbert Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainScreen />
    </div>
  );
}
