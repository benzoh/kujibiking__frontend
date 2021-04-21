import Head from "next/head";

import Header from "../organisms/header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* NOTE: Insert anything not here from the head component */}
      </Head>
      <Header />
      {children}
    </>
  );
}
