import { Image, Container } from '@chakra-ui/react'

export const Logo = () => {
    return (
        <Container >
            <Image
                w="64"
                src="/drew-logo.png"
                position="fixed"
                top="1rem"
                left="1rem"
                color="green"
            />
        </Container>
    )
}