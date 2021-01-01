import {useState} from "react";
import {Logo} from "../Logo";
import {NavBarContainer} from "./NavBarContainer";
import {MenuToggle} from "./MenuToggle";
import {MenuLinks} from "./MenuLinks";
import {DarkModeSwitch} from "../DarkModeSwitch";

export const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const darkModeSwitch = <DarkModeSwitch/>

    const navChildren = [darkModeSwitch];

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