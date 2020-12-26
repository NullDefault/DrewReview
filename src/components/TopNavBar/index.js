import {useState} from "react";
import {Logo} from "../Logo";
import {NavBarContainer} from "./NavBarContainer";
import {MenuToggle} from "./MenuToggle";
import {MenuLinks} from "./MenuLinks";
import {SideNav} from "../SideNav";
import {Button} from "@chakra-ui/react";
import {useAuth} from "../../lib/auth";
import {DarkModeSwitch} from "../DarkModeSwitch";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

export const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const auth = useAuth();
    const toggle = () => setIsOpen(!isOpen);

    const sideNav = <SideNav children={!auth?.user ? // if user is already logged in, show sign in button...
        <Button spacing={3} onClick={() => auth.signInWithGithub()}> Sign In </Button> :
        <Button spacing={3} onClick={() => auth.signOut()}> Sign Out</Button> // otherwise the sign out button
    }/>

    const sunIcon = <SunIcon color='white'/>
    const darkModeSwitch = <DarkModeSwitch/>
    const moonIcon = <MoonIcon color='white'/>


    const navChildren = [sunIcon, darkModeSwitch, moonIcon, sideNav];

    return (
        <NavBarContainer {...props}>
            <Logo
                w="200px"
            />
            <MenuToggle toggle={toggle} isOpen={isOpen}/>
            <MenuLinks isOpen={isOpen} children={navChildren}/>
        </NavBarContainer>
    );
};