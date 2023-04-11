import { Heading, Tab, TabList, Tabs } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <Tabs variant="soft-rounded" colorScheme="green" size={"lg"} align="center">
      <Heading>TASK LIST</Heading>
      <TabList>
        <Tab>
          <Link to="/">Home</Link>
        </Tab>
        <Tab>
          <Link to="/SobreNosotros">Sobre Nosotros</Link>
        </Tab>
        <Tab>
          <Link to="/App">Tareas</Link>
        </Tab>
      </TabList>
    </Tabs>
  );
}