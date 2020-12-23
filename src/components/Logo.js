import { Image, Box } from '@chakra-ui/react';

export const Logo = (props) => {
    return (
        <Box {...props}>
            <Image
                src="/drew-logo.png"
                color="green"
            />
        </Box>
    )
}