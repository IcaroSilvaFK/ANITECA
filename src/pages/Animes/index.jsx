import React from "react";
import Head from "next/head";

import { api } from "../../services/axios";
import { Layout } from "../../layout";

export default function AnimePage({ animes }) {
  console.log(animes);
  return (
    <>
      <Head></Head>
      <Layout>
        <h1>hello </h1>
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const response = await api.get("anime");
  if (response.status === 200) {
    const animes = response.data;
    return {
      props: { animes },
    };
  }
  return {
    props: {},
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}
