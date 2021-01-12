import {useState} from "react";
import {Logo} from "../Logo";
import {NavBarContainer} from "./NavBarContainer";
import {MenuToggle} from "./MenuToggle";
import {MenuLinks} from "./MenuLinks";
import {isMobile} from 'react-device-detect';

export const NavBar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const navChildren = [children];

    return (
        <NavBarContainer>
            <Logo
                w={isMobile ? "100px" : "200px"}
            />
            <MenuToggle toggle={toggle} isOpen={isOpen}/>
            <MenuLinks isOpen={isOpen} children={navChildren}/>
        </NavBarContainer>
    );
};