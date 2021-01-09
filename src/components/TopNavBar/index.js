import {useState} from "react";
import {Logo} from "../Logo";
import {NavBarContainer} from "./NavBarContainer";
import {MenuToggle} from "./MenuToggle";
import {MenuLinks} from "./MenuLinks";
import {DarkModeSwitch} from "../DarkModeSwitch";

export const NavBar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const darkModeSwitch = <DarkModeSwitch key="dms"/>

    const navChildren = [children, darkModeSwitch];

    return (
        <NavBarContainer>
            <Logo
                w="200px"
            />
            <MenuToggle toggle={toggle} isOpen={isOpen}/>
            <MenuLinks isOpen={isOpen} children={navChildren}/>
        </NavBarContainer>
    );
};