import { Flex, Box, Heading, Image } from "@chakra-ui/react";

const BackSchool = () => {
  return (
    <Box mt={{ md: 20 }}>
      {" "}
      <Flex
        margin={2}
        height="80vh"
        flexWrap={"wrap"}
        alignItems="center"
        justifyContent="space-between"
        gap={10}
      >
        <Box w={["100%", "30%", "30%"]} borderRadius={20} h="100%" bg="#7F8AF6">
          {" "}
          <Heading color={"#ffff"} fontSize={60} lineHeight={"70px"} mt={20}>
            BACK TO SCHOOL STYLE ARE HERE
          </Heading>
        </Box>
        <Box w={["100%", "30%", "30%"]} borderRadius={20} h="100%" bg="#7F8AF6">
          <Image
            src="https://kidxtore.bzotech.com/wp-content/uploads/2023/07/home3-slide1-img.png"
            height={526}
          />
        </Box>
        <Box w={["100%", "30%", "30%"]} borderRadius={20} h="100%" bg="#7F8AF6">
          <Image
            src="https://kidxtore.bzotech.com/wp-content/uploads/2023/07/home3-slide2-img.png"
            height={526}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default BackSchool;
