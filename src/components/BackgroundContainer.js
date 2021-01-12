import {Flex, useColorMode} from '@chakra-ui/react';

export const BackgroundContainer = (props) => {
    const {colorMode} = useColorMode();

    const bgColor = {light: 'gray.300', dark: 'gray.900'};

    const color = {light: 'black', dark: 'white'};
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            bg={bgColor[colorMode]}
            color={color[colorMode]}
            {...props}
        />
    )
}