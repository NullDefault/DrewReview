import {
    Button, Drawer, DrawerOverlay, DrawerContent,
    DrawerHeader, DrawerBody, DrawerFooter, Code
} from '@chakra-ui/react';
import React from 'react';
import {useDisclosure} from "@chakra-ui/hooks";
import { useAuth } from "../lib/auth";

export const SideNav = ({children}) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef();
    const auth = useAuth();

    return (
        <>
            <Button
                ref={btnRef}
                colorScheme="teal"
                onClick={onOpen}
            >
                Open Auth
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                    <DrawerContent >
                        <DrawerHeader>Currently logged in user: <Code>{auth?.user?.email}</Code></DrawerHeader>

                        <DrawerBody>
                            {children}
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}