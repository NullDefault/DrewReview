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
} from "@chakra-ui/react";
import { RiTeamFill } from "react-icons/ri";
import { GiBookshelf, GiTrumpetFlag } from "react-icons/gi";
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
          <option value={parseInt(year)}>{year}</option>
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
            pl="8"
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
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      w="60"
      border="6px solid"
      borderColor="menuGray"
      {...props}
    >
      <Flex px="6" align="center">
        <Logo pt="8" />
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="md"
        aria-label="Main Navigation"
        height="70vh"
      >
        <Box>
          <Box px={7} py={5} bg="white">
            {yearSelect}
          </Box>
          <NavItem icon={GiBookshelf} to="/">
            Archives
          </NavItem>
          <NavItem icon={GiTrumpetFlag} onClick={integrations.onToggle}>
            Call for Papers
            <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              transform={integrations.isOpen && "rotate(90deg)"}
            />
          </NavItem>
          <Collapse in={integrations.isOpen}>
            <NavItem pl="12" py="2" to="/submitPaper">
              Students
            </NavItem>
            <NavItem pl="12" py="2" to="/submitReview">
              Faculty
            </NavItem>
          </Collapse>
          <NavItem icon={RiTeamFill} to="/boardApplications">
            Board Applications
          </NavItem>
        </Box>
        <Flex direction="column" width="full" position="absolute" bottom="6">
          <VStack spacing="24px" mx="auto" width="full">
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
    <Box as="section" bg="menuGray" minH="100vh">
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
        <Box
          as="main"
          style={{
            backgroundImage: "url('/church-on-sunday.svg')",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
