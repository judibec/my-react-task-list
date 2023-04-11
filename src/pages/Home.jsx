import { Heading, Flex } from "@chakra-ui/react";

export function Home() {
    return <Flex alignItems="center" justifyContent="center" height="10vh">
      <Heading as="h2" size="3x1">Bienvenido a la app de tareas</Heading>
    </Flex>
  }