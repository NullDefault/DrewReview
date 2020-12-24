import {Box} from "@chakra-ui/react";
import {MenuIcon} from "../icons/MenuIcon";
import {CloseIcon} from "../icons/CloseIcon";

export const MenuToggle = ({toggle, isOpen}) => {
    return (
        <Box display={{base: "block", md: "none"}} onClick={toggle}>
            {isOpen ? <CloseIcon/> : <MenuIcon/>}
        </Box>
    );
};