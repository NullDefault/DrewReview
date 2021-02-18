import {
  Button,
  Code,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useAuth } from "../lib/auth";
import { LockIcon } from "@chakra-ui/icons";

export const SideNav = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const auth = useAuth();

  return (
    <>
      <Button ref={btnRef} colorScheme="primary" onClick={onOpen}>
        <LockIcon color="gray.500" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              Currently logged in user: <Code>{auth?.user?.email}</Code>
            </DrawerHeader>
            <DrawerBody>{children}</DrawerBody>
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
