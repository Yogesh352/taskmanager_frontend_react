import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../src/components/Navbar/Navbar";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/react-query";
import { USE_MOCK_DATA } from "@/config";
import { makeServer } from "@/lib/mirage";
if (USE_MOCK_DATA) {
  makeServer({ environment: process.env.NODE_ENV }).logging = false;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar>
        <Component {...pageProps} />
      </NavBar>
    </QueryClientProvider>
  );
}

export default MyApp;
