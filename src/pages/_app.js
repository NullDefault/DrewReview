import {
  ColorModeProvider,
  CSSReset,
  theme,
  ThemeProvider,
} from "@chakra-ui/react";
import { ProvideAuth } from "../lib/auth";
import AppNav from "../components/AppNav";
import {ProvideYear} from "../lib/year";

function MyApp({ Component, pageProps }) {
    return (
    <ProvideAuth>
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

    </ProvideAuth>
  );
}

export default MyApp;
