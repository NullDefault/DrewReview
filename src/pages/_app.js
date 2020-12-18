import {ThemeProvider, CSSReset, ColorModeProvider, theme} from '@chakra-ui/react'
import {ProvideAuth} from "../lib/auth";
import {pdfjs} from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

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