import { Flex, Heading, Text } from "@chakra-ui/react";

export function SobreNosotros(){
    return(
        <Flex alignItems="center" justifyContent="center" minHeight="auto" flexDirection="column">
            <Heading as="h2" size="3x1" mb={7} mt={7}>Descripcion de la app</Heading>
            <Text noOfLines={[1,2,3]} px="5rem" textAlign="justify">La app es una lista de tareas, la cual permite crear, eliminar y checkear las tareas que ya se han realizado, 
                se controla el hecho de que las tareas no puedan ser vacias y que tengan una descripcion basica, esta es obligatoria,
                a parte si tienes muchas tareas pendientes y necesitas cerrar la app, lo puedes hacer con total confianza, pues esta guarda en 
                memoria las tareas existentes y las que ya estaban checkeadas, esto te evitara tener que memorizarte las cosas </Text>
            <br/>
            <Text noOfLines={[1,2,3]} px="5rem" textAlign="justify">La aplicacion se realizo con componentes basicos de React, como hooks, forms y un enrutamiento basico, los componentes que se usaron fueron
                una lista de tareas, las tareas y un main que mostraba toda la informacion actualizarse, esto con el fin de poderlo extender a futuro
            </Text>
        </Flex>
    )
}