import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Collapse,
  IconButton,
  Icon,
  useDisclosure,
  Select,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Logo } from "./Logo";
import Link from "next/link";
import { GoTriangleDown } from "react-icons/go";
import { useYear } from "../lib/year";
import { VStack } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import data from "../archives.json";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function AppNav({ children }) {
  const sidebar = useDisclosure();
  const router = useRouter();
  const yearContext = useYear();
  const integrations = useDisclosure();

  const yearSelect =
    router.pathname === "/" ? (
      <Select
        placeholder="Pick Year"
        icon={<GoTriangleDown />}
        fontWeight="extrabold"
        color="drewBlue.800"
        borderColor="borderGray"
        bg="white"
        border="5px solid"
        borderRadius="none"
        size="lg"
        value={yearContext.year}
        onChange={(e) => {
          yearContext.setYear(e.target.value);
        }}
        _focus={{
          color: "drewBlue.700",
          bg: "white",
        }}
        _hover={{
          color: "drewBlue.700",
          bg: "white",
        }}
      >
        {data.years.map((year) => (
          <option value={parseInt(year)} key={parseInt(year)}>
            {year}
          </option>
        ))}
      </Select>
    ) : (
      <></>
    );

  const NavItem = (props) => {
    const { icon, children, to = "", ...rest } = props;
    return (
      <Link href={to} passHref>
        <a>
          <Flex
            align="center"
            pl="3"
            py="3"
            cursor="pointer"
            color="drewBlue.800"
            _hover={{
              bg: "menuGray",
            }}
            role="group"
            fontWeight="semibold"
            transition=".15s ease"
            {...rest}
          >
            {icon && <Icon mr="2" boxSize="4" as={icon} />}
            {children}
          </Flex>
        </a>
      </Link>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      pb="10"
      h="full"
      overflowX="hidden"
      overflowY="hidden"
      bg="white"
      w={64}
      {...props}
    >
      <Logo pt="8" px={6} />
      <Flex
        direction="column"
        as="nav"
        h={["60vh", "80vh"]}
        fontSize="md"
        aria-label="Main Navigation"
        px={6}
      >
        <Box>
          <Box py={5} bg="white">
            {yearSelect}
          </Box>
          <NavItem
            to="/"
            borderTop="6px solid"
            borderX="6px solid"
            borderColor="menuGray"
          >
            Archives
          </NavItem>
          <NavItem
            onClick={integrations.onToggle}
            borderTop="6px solid"
            borderX="6px solid"
            borderColor="menuGray"
          >
            Call for Papers
            <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              transform={integrations.isOpen && "rotate(90deg)"}
            />
          </NavItem>
          <Collapse in={integrations.isOpen}>
            <NavItem
              py="2"
              to="/submitPaper"
              borderX="6px solid"
              borderColor="menuGray"
            >
              Students
            </NavItem>
            <NavItem
              py="2"
              to="/submitReview"
              borderX="6px solid"
              borderColor="menuGray"
            >
              Faculty
            </NavItem>
          </Collapse>
          <NavItem
            to="/boardApplications"
            border="6px solid"
            borderColor="menuGray"
          >
            Board Applications
          </NavItem>
        </Box>
        <Spacer minH="36px" />
        <Flex direction="column">
          <VStack spacing="24px">
            <Box w={{ base: "75px", sm: "100px" }}>
              <Image src="/favicon.ico" />
            </Box>
            <Box fontWeight="semibold" color="drewBlue.800">
              © 2021 Drew University
            </Box>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
  return (
    <Box as="section" bg="drewBlue.800" minH="100vh">
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg="drewBlue.800"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            bg="drewBlue.700"
            _hover={{
              bg: "drewBlue.600",
            }}
            color="white"
            size="md"
            my="4"
          />
        </Flex>
        <Box as="main">{children}</Box>
      </Box>
    </Box>
  );
}
