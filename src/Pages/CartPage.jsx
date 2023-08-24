// src/components/CartSection.js
import { useContext } from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Button,
  Text,
  Flex,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Cart } from "../Components/Context/Context";
import { MdOutlineCancel } from "react-icons/md";

const CartSection = () => {
  // Sample cart data for demonstration purposes
  const { cartitem, setCartitem } = useContext(Cart);

  const handleRemoveItem = (itemId) => {
    setCartitem((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <Box p={4}>
      <Heading size="lg">Your Cart</Heading>
      {cartitem.length > 0 ? (
        <Table variant="simple" mt={4}>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Quantity</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartitem.map((item) => (
              <Tr key={item.id}>
                <Td>
                  <Image
                    src={item.Image}
                    alt={item.name}
                    boxSize={40}
                    objectFit="contain"
                  />
                  <Box fontSize={20}>
                    {item.title} <br />${item.Price}
                  </Box>
                </Td>

                <Td fontSize={20}>${item.Price}</Td>
                <Td>
                  <Box
                    onClick={() => handleRemoveItem(item.id)}
                    cursor={"pointer"}
                    fontSize={20}
                    color={"red"}
                  >
                    {<MdOutlineCancel />}
                  </Box>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <>
          <Flex align={"center"} justify={"center"}>
            <Box>
              <Center>
                <Image src="https://furn.netlify.app/static/media/empty.84c3387ce97314dbd61c.png" />{" "}
              </Center>

              <Text
                mt={4}
                color={"#737FF6"}
                fontSize={30}
                fontFamily={"fantasy"}
              >
                Discover The Art Of Space: Your Empty Cart <br /> Await Your
                Perfect Product
              </Text>
              <Center>
                <Link to="/">
                  <Button
                    border={"1px solid black"}
                    _hover={{
                      backgroundColor: "#737FF6",
                      transition: "0.4s",
                      border: "none",
                    }}
                    margin={3}
                  >
                    Return to Shop
                  </Button>{" "}
                </Link>
              </Center>
            </Box>
          </Flex>
        </>
      )}
      {cartitem.length > 0 && (
        <Box mt={4} textAlign="right">
          <Button colorScheme="blue">Checkout</Button>
        </Box>
      )}
    </Box>
  );
};

export default CartSection;
