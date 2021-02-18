import { useState } from "react";
import { Logo } from "../Logo";
import { NavBarContainer } from "./NavBarContainer";
import { MenuToggle } from "./MenuToggle";
import { MenuLinks } from "./MenuLinks";
import { isMobile } from "react-device-detect";
import { MenuItem } from "./MenuItem";

export const NavBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navLinks = [
    <MenuItem to="/boardApplications">Editorial Board Applications</MenuItem>,
    <MenuItem to="/submissions">Submitting a Paper</MenuItem>,
    <MenuItem to="/">Archives</MenuItem>,
  ];
  const navChildren = [children, navLinks];

  return (
    <NavBarContainer>
      <Logo w={isMobile ? "75px" : "200px"} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} children={navChildren} />
    </NavBarContainer>
  );
};
