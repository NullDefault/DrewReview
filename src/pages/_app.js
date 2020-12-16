import {ThemeProvider, CSSReset, ColorModeProvider} from '@chakra-ui/react'

import theme from '../theme'
import {ProvideAuth} from "../../lib/auth";

function MyApp({Component, pageProps}) {
    return (
        <ProvideAuth>
            <ThemeProvider theme={theme}>
                <ColorModeProvider
                    options={{
                        useSystemColorMode: true,
                    }}
                >
                    <CSSReset/>
                    <Component {...pageProps} />
                </ColorModeProvider>
            </ThemeProvider>
        </ProvideAuth>
    )
}

export default MyApp