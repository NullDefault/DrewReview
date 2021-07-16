import { CSSReset, ThemeProvider } from "@chakra-ui/react";
import AppNav from "../components/AppNav";
import { ProvideYear } from "../lib/year";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideYear>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <AppNav>
          <Component {...pageProps} />
        </AppNav>
      </ThemeProvider>
    </ProvideYear>
  );
}

export default MyApp;
