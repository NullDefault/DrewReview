import {
  ColorModeProvider,
  CSSReset,
  theme,
  ThemeProvider,
} from "@chakra-ui/react";
import AppNav from "../components/AppNav";
import { ProvideYear } from "../lib/year";

function MyApp({ Component, pageProps }) {
  return (
      <ProvideYear>
        <ThemeProvider theme={theme}>
          <ColorModeProvider
            options={{
              useSystemColorMode: true,
            }}
          >
            <CSSReset />
            <AppNav>
              <Component {...pageProps} />
            </AppNav>
          </ColorModeProvider>
        </ThemeProvider>
      </ProvideYear>
  );
}

export default MyApp;
