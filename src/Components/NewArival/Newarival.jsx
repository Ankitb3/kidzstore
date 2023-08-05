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
import axios from "axios";
import Star from "../../assets/star.png";
import { useEffect, useState } from "react";
import AddCartButton from "../AddCardButton/AddCartButton";
const Newarival = () => {
  const [arrivals, setArrivals] = useState([]);
  console.log(arrivals);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_APP_PUBLIC_API_KEY)
      .then((result) => {
        setArrivals(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box height={"90vh"}>
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
      {/* <Flex> */}
      <Grid
        templateColumns={{ md: "repeat(4, 1fr)", sm: "repeat(2, 1fr)" }}
        justify-content="center"
        gap={6}
      >
        {arrivals.map((arrivalitem) => {
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
                  {" "}
                  <Box width={"90%"}>
                    {" "}
                    <AddCartButton>ADD TO CART</AddCartButton>
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
