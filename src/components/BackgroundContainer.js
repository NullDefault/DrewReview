import {Flex} from '@chakra-ui/react';

export const BackgroundContainer = (props) => {
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            bg="transparent"
            color="white"
            style={{
                overflow: "auto",
                position: "relative"
            }}
            {...props}
        />
    )
}