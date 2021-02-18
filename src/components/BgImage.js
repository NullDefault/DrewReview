import {useWindowSize} from "../lib/windowSize";
import {Box} from "@chakra-ui/react";

export const BgImage = () => {
    const windowSize = useWindowSize();

    return (
        <Box bg="#374130">
                <div style={{
                        width: windowSize.width,
                        height: windowSize.height,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        position: "fixed",
                        zIndex: -1,
                        backgroundSize: "cover",
                        backgroundImage: "url('/forest.png')",
                        content: "",
                        opacity: 0.9,
                        backgroundBlendMode: "luminosity",
                        WebkitFilter: "blur(3px) brightness(85%)",
                        MozFilter: "blur(3px) brightness(85%)",
                        OFilter: "blur(3px) brightness(85%)",
                        MsFilter: "blur(3px) brightness(85%)",
                        filter: "blur(3px) brightness(85%)",
                }}/>
        </Box>
    )
}