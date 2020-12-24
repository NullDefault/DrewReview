import {useAuth} from "../../lib/auth";
import {Box, Button, Stack} from "@chakra-ui/react";
import {SideNav} from "../SideNav";

export const MenuLinks = ({isOpen}) => {
    const auth = useAuth();
    return (
        <Box
            display={{base: isOpen ? "block" : "none", md: "block"}}
            flexBasis={{base: "100%", md: "auto"}}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <SideNav children={!auth?.user ? // if user is already logged in, show sign in button...
                    <Button spacing={3} onClick={() => auth.signInWithGithub()}> Sign In </Button> :
                    <Button spacing={3} onClick={() => auth.signOut()}> Sign Out</Button> // otherwise the sign out button
                }/>
            </Stack>
        </Box>
    );
};