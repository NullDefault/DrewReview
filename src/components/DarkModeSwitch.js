import { useColorMode, IconButton } from '@chakra-ui/react';
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

export const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const icon = isDark ? <MoonIcon/> : <SunIcon/>

    return (
        <IconButton aria-label="Toggle dark mode" icon={icon} onClick={toggleColorMode} size="lg"/>
    )
}