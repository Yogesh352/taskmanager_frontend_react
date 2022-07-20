import "../styles/globals.css";
import "../styles/syncfusion.css"

import type { AppProps } from "next/app";
import Layout from "../src/components/Layout/Layout";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/react-query";
import { USE_MOCK_DATA } from "@/config";
import { makeServer } from "@/lib/mirage";
import { SettingsContextProvider } from "context/ContextProvider";

if (USE_MOCK_DATA) {
  makeServer({ environment: process.env.NODE_ENV }).logging = false;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SettingsContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SettingsContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
