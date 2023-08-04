import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
const Support = () => {
  const data = [
    {
      Icon: <FaShippingFast />,
      title: "Free Shipping + Returns",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    },
    {
      Icon: <MdOutlineSupportAgent />,
      title: "Support Online 24/7",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    },
    {
      Icon: <RiSecurePaymentLine />,
      title: "Secure Payments",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    },
  ];
  return (
    <Flex
      justifyContent={"space-around"}
      mt={24}
      p={2}
      height={"33vh"}
      flexWrap={"wrap"}
      gap={10}
    >
      {data.map((item) => {
        return (
          <>
            <Box
              p="4"
              width={380}
              _hover={{
                border: "3px dotted #737FF7",
              }}
              border={"2px dotted grey"}
              display={"flex"}
              justifyItems={"center"}
              flexDir={"column"}
              textAlign={"center"}
              cursor={"pointer"}
            >
              <Center>
                <Box color={"#737FF7"} fontSize={40}>
                  {item.Icon}
                </Box>
              </Center>

              <Heading fontSize={23}>{item.title}</Heading>
              <Text mt={3}>{item.desc}</Text>
            </Box>
          </>
        );
      })}

      {/* <Box p="4" width={380}>
        <Heading>Free Shipping + Returns</Heading>
      </Box>
      <Box p="4" width={380}>
        <Heading>Free Shipping + Returns</Heading>
      </Box> */}
    </Flex>
  );
};

export default Support;
