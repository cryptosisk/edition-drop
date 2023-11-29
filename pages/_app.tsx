import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";

// This is the chain your dApp will work on.
const activeChain = "arbitrum";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
     <Head>
        <title>Film0 Ticket</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Mint an NFT Ticket for Film0, Presented by Irreversible DAO"
        />
        <meta
          name="keywords"
          content="irreversiblefilms, irreversibledao, film0, irreversible films, irreversible dao, sisk"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
