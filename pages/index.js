import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dinetap.</title>
      </Head>

      <main>
        <div
          style={{
            paddingLeft: "300px",
            paddingRight: "300px",
          }}
        >
          <img
            src="/logo.png"
            style={{
              width: "100%",
            }}
          />
        </div>

        <Header title="Coming Soon!" />
      </main>
    </div>
  );
}
