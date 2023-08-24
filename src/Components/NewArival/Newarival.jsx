import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Star from "../../assets/star.png";
import { useContext, useState } from "react";
import AddCartButton from "../AddCardButton/AddCartButton";
import { Cart } from "../Context/Context";
const Newarival = () => {
  const { Products, cartitem, setCartitem } = useContext(Cart);
  localStorage.setItem("cart", JSON.stringify(cartitem));
  const [count, setCount] = useState(0);
  console.log(count);

  function Addcart(arrivalitem) {
    toast.success("Added To Cart", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setCartitem([...cartitem, arrivalitem]);
    setCount(count + 1);
  }

  return (
    <Box>
      <Heading
        color={"#3A407B"}
        textAlign={"center"}
        mt={40}
        fontSize={50}
        data-aos="fade-down"
      >
        New Arrivals
      </Heading>
      <Text textAlign={"center"} color={"#929292"}>
        Dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing{" "}
        <br /> elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua
      </Text>
      <ToastContainer />

      {/* <Flex> */}
      <Grid
        templateColumns={{ md: "repeat(4, 1fr)", sm: "repeat(2, 1fr)" }}
        justify-content="center"
        gap={6}
      >
        {Products.map((arrivalitem) => {
          return (
            <>
              <GridItem
                margin={5}
                height={{ md: 400 }}
                cursor={"pointer"}
                data-aos="flip-right"
                data-aos-duration="1500"
                key={arrivalitem.id}
                bg={"#F3F3F3"}
                width={"85%"}
                borderRadius={20}
              >
                <Image
                  src={arrivalitem.Image}
                  style={{ filter: "drop-shadow(5px 5px 5px #555)" }}
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "0.5s",
                  }}
                />
                <Text textAlign={"center"} fontSize={22}>
                  {arrivalitem.title}
                </Text>
                <Flex justifyContent={"space-around"}>
                  {" "}
                  <Text color={"#737FF6"} fontSize={30}>
                    ${arrivalitem.Price}
                  </Text>
                  <Box mt={3} fontSize={20}>
                    <Flex gap={2} align={"center"}>
                      <Image src={Star} height={5} />
                      <Text as={"span"}>{arrivalitem.Rating}</Text>
                    </Flex>
                  </Box>
                </Flex>

                <Center>
                  <Box width={"90%"}>
                    <AddCartButton Addcart={() => Addcart(arrivalitem)}>
                      ADD TO CART
                    </AddCartButton>
                  </Box>
                </Center>
              </GridItem>
            </>
          );
        })}
      </Grid>

      {/* </Flex> */}
    </Box>
  );
};

export default Newarival;
