import { useColorMode, Switch } from '@chakra-ui/react';

export const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    return (
        <Switch
            color="blue"
            isChecked={isDark}
            onChange={toggleColorMode}
            size="lg"
        >
        </Switch>
    )
}