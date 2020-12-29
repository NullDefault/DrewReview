import {useState} from "react";
import {Logo} from "../Logo";
import {NavBarContainer} from "./NavBarContainer";
import {MenuToggle} from "./MenuToggle";
import {MenuLinks} from "./MenuLinks";
import {DarkModeSwitch} from "../DarkModeSwitch";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

export const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const sunIcon = <SunIcon color='white'/>
    const darkModeSwitch = <DarkModeSwitch/>
    const moonIcon = <MoonIcon color='white'/>


    const navChildren = [sunIcon, darkModeSwitch, moonIcon];

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