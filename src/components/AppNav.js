import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Icon,
  useColorModeValue,
  useDisclosure,
  Select,
  Image,
} from "@chakra-ui/react";
import { RiTeamFill } from "react-icons/ri";
import { BsInfoSquareFill } from "react-icons/bs";
import { GiBookshelf, GiTrumpetFlag } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import { Logo } from "./Logo";
import Link from "next/link";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { useYear } from "../lib/year";
import { VStack } from "@chakra-ui/layout";
import { useRouter } from "next/router";

export default function AppNav({ children }) {
  const sidebar = useDisclosure();
  const router = useRouter();
  const yearContext = useYear();

  const yearSelect =
    router.pathname === "/" ? (
      <Box>
        <Select
          placeholder="Select year"
          icon={<TriangleDownIcon />}
          variant="filled"
          color="white"
          borderColor="gray.700"
          focusBorderColor="gray.600"
          size="lg"
          value={yearContext.year}
          onChange={(e) => {
            yearContext.setYear(e.target.value);
          }}
        >
          <option value={2008}>2008</option>
          <option value={2009}>2009</option>
          <option value={2010}>2010</option>
          <option value={2011}>2011</option>
          <option value={2012}>2012</option>
          <option value={2013}>2013</option>
          <option value={2014}>2014</option>
          <option value={2015}>2015</option>
          <option value={2016}>2016</option>
          <option value={2017}>2017</option>
          <option value={2018}>2018</option>
          <option value={2019}>2019</option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
        </Select>
      </Box>
    ) : (
      <></>
    );

  const NavItem = (props) => {
    const { icon, children, to = "/", ...rest } = props;
    return (
      <Link href={to} passHref>
        <a>
          <Flex
            align="center"
            pl="8"
            py="3"
            cursor="pointer"
            color={useColorModeValue("inherit", "gray.400")}
            _hover={{
              bg: useColorModeValue("gray.100", "gray.900"),
              color: useColorModeValue("gray.900", "gray.200"),
            }}
            role="group"
            fontWeight="semibold"
            transition=".15s ease"
            {...rest}
          >
            {icon && (
              <Icon
                mr="2"
                boxSize="4"
                _groupHover={{
                  color: useColorModeValue("gray.600", "gray.300"),
                }}
                as={icon}
              />
            )}
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
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.900")}
      borderRightWidth="6px"
      w="60"
      {...props}
    >
      <Flex px="6" align="center">
        <Logo px="3" pt="8" />
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
        height="70vh"
      >
        <Box>
          <Box px={7} py={5}>
            {yearSelect}
          </Box>
          <NavItem icon={BsInfoSquareFill} to="/about">
            About
          </NavItem>
          <NavItem icon={GiBookshelf} to="/">
            Archives
          </NavItem>
          <NavItem icon={GiTrumpetFlag} to="/callForPapers">
            Call for Papers
          </NavItem>
          <NavItem icon={RiTeamFill} to="/boardApplications">
            Board Applications
          </NavItem>
        </Box>
        <Flex direction="column" width="full" position="absolute" bottom="12">
          <VStack spacing="24px" mx="auto" width="full">
            <Box w={{ base: "75px", sm: "100px" }}>
              <Image src="/favicon.ico" />
            </Box>
            <Box color="white">© 2021 Drew University</Box>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
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
          bg={useColorModeValue("white", "gray.800")}
          borderBottomWidth="1px"
          borderColor={useColorModeValue("inherit", "gray.700")}
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
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
