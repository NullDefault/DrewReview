import {Button} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";

export const PageButton = ({isLeft, setPage}) => {

    const icon = isLeft ? <ChevronLeftIcon/> : <ChevronRightIcon/>;

    return (
        <Button style={{borderRadius: '24px'}} colorScheme="blue"
                onClick={
                    setPage
                }
                ml={
                    isLeft ? '24px' : '0px'
                }
                mr={
                    isLeft ? '0px': '24px'
                }>
            {icon}
        </Button>
    );
}