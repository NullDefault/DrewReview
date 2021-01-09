import {
    HStack,
    NumberDecrementStepper, NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text
} from "@chakra-ui/react";

export const PageNumberInput = ({pageData, setNewPage, isMobile}) => {
    const pageDecrement = (pageData.pageNumber <= 1) ? <div/> : <NumberDecrementStepper/>
    const pageIncrement = (pageData.pageNumber >= pageData.totalPages) ? <div/> : <NumberIncrementStepper/>

    return (
        <HStack>
            <NumberInput value={pageData.pageNumber} allowMouseWheel={!isMobile}
                         onChange={setNewPage} min={1} max={pageData.totalPages}>
                <NumberInputField/>
                <NumberInputStepper>
                    {pageIncrement} {pageDecrement}
                </NumberInputStepper>
            </NumberInput>
            <Text>
                / {pageData.totalPages}
            </Text>
        </HStack>
    )
}