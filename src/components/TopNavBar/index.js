import {useState} from "react";
import {Logo} from "../Logo";
import {NavBarContainer} from "./NavBarContainer";
import {MenuToggle} from "./MenuToggle";
import {MenuLinks} from "./MenuLinks";
import {DarkModeSwitch} from "../DarkModeSwitch";
import {useWindowSize} from "../../lib/windowSize";

export const NavBar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const windowSize = useWindowSize();
    const toggle = () => setIsOpen(!isOpen);
    const darkModeSwitch = <DarkModeSwitch key="dms"/>

    const navChildren = [children, darkModeSwitch];

    return (
        <NavBarContainer>
            <Logo
                w={windowSize.width < windowSize.height ? "100px" : "200px"}
            />
            <MenuToggle toggle={toggle} isOpen={isOpen}/>
            <MenuLinks isOpen={isOpen} children={navChildren}/>
        </NavBarContainer>
    );
};