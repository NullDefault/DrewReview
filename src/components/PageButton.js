import {Button} from "@chakra-ui/react";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";

export const PageButton = ({isLeft, setPage, pageNum, totalPages}) => {
    const onRightClick = () => {
        if(pageNum !== totalPages){
            setPage(pageNum + 1);
        }

    }
    const onLeftClick = () => {
        if(pageNum !== 1){
            setPage(pageNum - 1);
        }
    }

    const icon = isLeft ? <ChevronLeftIcon/> : <ChevronRightIcon/>;

    return (
        <Button style={{borderRadius: '24px'}} colorScheme="blue"
                onClick={
                    isLeft ? onLeftClick : onRightClick
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