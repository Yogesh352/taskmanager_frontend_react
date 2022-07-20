import Document, { Head, Html, Main, NextScript } from "next/document";

import { createGetInitialProps } from "@mantine/next";

const getInitialProps = createGetInitialProps();

export default class MyDocument extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/logo-small.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://cdn.syncfusion.com/ej2/material.css"
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
}
