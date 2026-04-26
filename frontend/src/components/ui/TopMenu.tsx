import { CloseButton, Drawer as D, Flex, Heading } from "@chakra-ui/react";
import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function TopMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <Flex
        padding={5}
        align={"center"}
        gap={5}
        borderBottom={"md"}
        borderColor={"gray.500"}
      >
        <D.Root
          open={isOpen}
          placement={"start"}
          size={"xs"}
          onOpenChange={(e) => setIsOpen(e.open)}
        >
          <D.Trigger asChild>
            <Bars3BottomLeftIcon className={"size-6 text-brand-primary"} />
          </D.Trigger>
          <D.Backdrop />
          <D.Positioner>
            <D.Content>
              <D.Header>
                <D.Title>menu</D.Title>
              </D.Header>
              <D.Body>links</D.Body>
              <D.CloseTrigger asChild>
                <CloseButton size={"md"} />
              </D.CloseTrigger>
            </D.Content>
          </D.Positioner>
        </D.Root>

        <Heading
          as={"h1"}
          textStyle={"2xl"}
          fontWeight={"thin"}
          style={{ fontFamily: "'JetBrains Mono'" }}
          className="text-brand-primary"
        >
          ROLL CALL
        </Heading>
      </Flex>
    </header>
  );
}
