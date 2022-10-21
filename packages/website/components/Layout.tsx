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
        <title>{TITLE_AND_TAGLINE}</title>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Teun Zengerink" />
        <meta name="description" content={TAGLINE} />
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
