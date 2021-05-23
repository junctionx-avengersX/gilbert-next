import Head from "next/head";
import MainScreen from "screens/MainScreen";
import { NAVERMAP_CLIENT_ID } from "config";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gilbert Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVERMAP_CLIENT_ID}`}
        ></script>
      </Head>
      <MainScreen />
    </div>
  );
}
