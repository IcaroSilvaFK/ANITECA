import { Html, Head, Main, NextScript } from "next/document";

export default function _document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600;700&family=Poppins:wght@400;700;900&family=Rock+3D&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
