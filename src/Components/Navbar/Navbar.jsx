import {
  Text,
  Box,
  Button,
  Flex,
  Input,
  useDisclosure,
  Badge,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useContext, useEffect, useRef, useState } from "react";
import { Cart } from "../Context/Context";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartitem } = useContext(Cart);
  const btnRef = useRef();
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={scrollY > 500 && "#7F8AF6"}
      transition={"0.8s"}
      pos={scrollY > 500 ? "fixed" : "none"}
      width={"full"}
      zIndex={"1"}
    >
      <Box>
        <Link to={"/"}>
          <Box
            fontSize={40}
            textShadow={"2px 2px 2px #737FF7"}
            cursor={"pointer"}
          >
            KidzStore
          </Box>
        </Link>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            textAlign={"center"}
            fontSize={30}
            fontFamily={"cursive"}
          >
            Search For Products
          </DrawerHeader>

          <DrawerBody width={"50%"} pos={"relative"} left={"25%"}>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Search</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Box
        display={{ base: "none", md: "flex" }}
        gap={2}
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
        <Button fontSize={25} bg={"transparent"} _hover={{ bg: "transparent" }}>
          {<AiOutlineHeart />}
        </Button>
        <Link to="/cart">
          <Box fontSize={32} mt={1}>
            {" "}
            {<LiaShoppingBasketSolid />}
          </Box>
          <Badge
            colorScheme="red"
            position={"relative"}
            bottom={"3.5rem"}
            left={5}
          >
            {cartitem.length}
          </Badge>
        </Link>
        <Button fontSize={25} bg={"transparent"} _hover={{ bg: "transparent" }}>
          <Text>Login</Text>
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
