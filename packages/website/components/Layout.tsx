import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";

const TITLE = "Training Calculator";
const TAGLINE =
  "Determine your training stress score, intensity factor, normalized power, threshold pace and much more.";
const TITLE_AND_TAGLINE = `${TITLE} | ${TAGLINE}`;

export const Layout: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"
        ></meta>
        <meta name="mobile-wep-app-capable" content="yes" />
        <meta name="apple-mobile-wep-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content={TITLE}></meta>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Teun Zengerink" />
        <meta name="description" content={TAGLINE} />
        <title>{TITLE_AND_TAGLINE}</title>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_BASE_DIR}favicon.ico`}
        />
        <link
          rel="manifest"
          href={`${process.env.NEXT_PUBLIC_BASE_DIR}manifest.json`}
        />
      </Head>
      <AppBar component="nav" sx={{ bgcolor: "primary.900" }}>
        <Toolbar>
          <Typography variant="h6">{TITLE}</Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ marginTop: 9 }}>
        <Component {...pageProps} />
      </Box>
    </>
  );
};
