import { useState, useEffect } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Shopbutton from "../ShopButton/Shopbutton";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://kidxtore.bzotech.com/wp-content/uploads/2023/07/home3-slide1-img.png",
    "https://kidxtore.bzotech.com/wp-content/uploads/2023/07/home3-slide2-img.png",
    "https://kidxtore.bzotech.com/wp-content/uploads/2023/07/home3-slide3-img.png",
    // Add more slide images here
  ];
  const numSlides = slides.length;
  const slideInterval = 5000; // Change slide every 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === numSlides - 1 ? 0 : prevSlide + 1
      );
    }, slideInterval);

    return () => clearInterval(interval);
  }, [numSlides, slideInterval]);

  return (
    <>
      <Flex height={"83.5vh"}>
        <Box as="h1" bg={"#EDEBFF"} width={"50%"}></Box>
          <Heading
            position={"relative"}
            top={"30%"}
            fontSize={{ sm: 85 }}
            color={"#3A407B"}
          >
            KIDZ
          </Heading>
        </Box>
        <Flex pos={"absolute"} height={"20rem"}>
          <Box
            position="relative"
            overflow="hidden"
            height={700}
            bottom={"9.5rem"}
          >
            <AnimatePresence initial={false} custom={currentSlide}>
              <motion.img
                key={currentSlide}
                src={slides[currentSlide]}
                alt={`Slide ${currentSlide}`}
                position="absolute"
                object-fit="contain"
                top={0}
                left={0}
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-100%" }}
                transition={{ duration: 0.5 }}
                custom={currentSlide}
              />
            </AnimatePresence>
          </Box>
        </Flex>
        <Box as="h1" bg={"#737FF7"} width={"50%"}>
          <Heading
            position={"relative"}
            top={"30%"}
            fontSize={{ sm: 85 }}
            color={"#FFFF"}
          >
            STORE
          </Heading>
          <Box pos={"relative"} top={"32%"} p={2}>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium corporis quas cupiditate, eius quam tenetur quasi quae
              provident ex expedita accusamus perspiciatis!
            </Text>
            <Shopbutton
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              Shop Now
            </Shopbutton>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Slider;
