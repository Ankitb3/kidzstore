import { Box } from "@chakra-ui/react";
import Uparrow from "../../assets/up-arrow.gif";
const Top = () => {
  function Handlescroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <Box bg={"green"}>
      <Box
        as="span"
        p={7}
        borderRadius={50}
        fontSize={20}
        pos={"fixed"}
        left={"92%"}
        zIndex={"1"}
        cursor={"pointer"}
        scrollBehavior={"smooth"}
        onClick={Handlescroll}
      >
        <img src={Uparrow} />
      </Box>
    </Box>
  );
};

export default Top;
