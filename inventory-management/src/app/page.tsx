import Image from "next/image";
import Dashboard from "@/app/dashboard/page"
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Dashboard />
    </div>
  );
}
