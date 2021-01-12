import {Flex} from '@chakra-ui/react';

export const BackgroundContainer = (props) => {
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            bg="gray.900"
            color="white"
            {...props}
        />
    )
}