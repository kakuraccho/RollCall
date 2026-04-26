import { Flex, Heading, Box, Text, Grid, GridItem } from "@chakra-ui/react";

export default function App() {
  return (
    <body>
      <main>
        <Flex direction={"column"} pl={"4"} pr={"4"} pt={"8"} gap={"10"}>
          <Flex direction={"column"} gap={"4"}>
            {/*TODO: insert today's date in TODAY*/}
            <Heading as={"h2"} textStyle={"4xl"} className="text-brand-primary">
              DUTY IN TODAY
            </Heading>

            {/*TODO: use map for duty*/}
            <Box
              p={"6"}
              className="bg-brand-secondary rounded-2xl"
              style={{ border: "3px solid #7aa2f7" }}
            >
              <Text textStyle={"4xl"} fontWeight={"thin"}>
                Hoge Hogeta
              </Text>
            </Box>
            <Box
              p={"6"}
              className="bg-brand-secondary rounded-2xl"
              style={{ border: "3px solid #7aa2f7" }}
            >
              <Text textStyle={"4xl"} fontWeight={"thin"}>
                Hoge Hogeta
              </Text>
            </Box>
          </Flex>

          <Flex direction={"column"} gap={"4"}>
            <Heading as={"h2"} textStyle={"3xl"} className="text-brand-primary">
              NEXT IN QUEUE
            </Heading>

            {/*TODO: use map for next duty*/}
            <Box
              border={"sm"}
              borderRadius={"2xl"}
              pl={"2"}
              pr={"4"}
              pt={"4"}
              pb={"4"}
              className="bg-brand-secondary"
            >
              <Grid
                h={"100px"}
                templateRows={"repeat(2, 1fr)"}
                templateColumns={"repeat(4, 1fr)"}
                gap={2}
              >
                <GridItem
                  rowSpan={2}
                  colSpan={1}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text textStyle={"2xl"}>3/14</Text>
                </GridItem>

                <GridItem
                  rowSpan={1}
                  colSpan={3}
                  display="flex"
                  alignItems="center"
                  pl={4}
                >
                  <Box>
                    <Text textStyle={"2xl"} fontWeight={"thin"}>
                      Huga Hugata
                    </Text>
                  </Box>
                </GridItem>

                <GridItem
                  rowSpan={1}
                  colSpan={3}
                  display="flex"
                  alignItems="center"
                  pl={4}
                >
                  <Box>
                    <Text textStyle={"2xl"} fontWeight={"thin"}>
                      Huga Hugata
                    </Text>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </Flex>
        </Flex>
      </main>
      <nav></nav>
    </body>
  );
}
