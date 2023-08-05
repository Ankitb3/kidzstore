import {
  Text,
  Box,
  Button,
  Flex,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
      >
        <Box>
          <Link href="/" fontSize={40} textShadow={"2px 2px 2px #737FF7"}>
            KidzStore
          </Link>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Search Products</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input placeholder="medium size" size="md" />
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                variant={"ghost"}
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
              <Button colorScheme="blue">Search</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Box
          display={{ base: "none", md: "flex" }}
          gap={5}
          width={{ md: "auto" }}
        >
          <Button
            onClick={onOpen}
            fontSize={25}
            bg={"transparent"}
            _hover={{ bg: "transparent" }}
          >
            {<BsSearch />}
          </Button>

          <Link href="/contact" fontSize={32}>
            {<LiaShoppingBasketSolid />}
          </Link>
          <Button
            onClick={onOpen}
            fontSize={25}
            bg={"transparent"}
            _hover={{ bg: "transparent" }}
          >
            <Text>Login</Text>
          </Button>
        </Box>
      </Flex>
  );
};

export default Navbar;
