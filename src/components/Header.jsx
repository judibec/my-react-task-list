import { Heading, Flex } from "@chakra-ui/react";

function Header(){
    return( <Flex alignItems="center" justifyContent="center" minHeight="auto" flexDirection="column">
        <Heading as="h2" size={"3x1"} mb={7} mt={7}>Todo App</Heading>
        </Flex>
    )
};

export default Header;