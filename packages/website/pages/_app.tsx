import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { deepPurple, grey, pink } from "@mui/material/colors";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { AppProps } from "next/app";
import React, { useEffect } from "react";
import { Layout } from "../components/Layout";

const theme = createTheme({
  palette: { mode: "dark", primary: deepPurple, secondary: pink, grey },
});

const App: React.FC<AppProps> = (appProps) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register(
        `${process.env.NEXT_PUBLIC_BASE_DIR}serviceWorker.js`,
        { scope: process.env.NEXT_PUBLIC_BASE_DIR }
      );
    }
  }, []);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Layout {...appProps} />
        </LocalizationProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
