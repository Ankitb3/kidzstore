import { Button } from "@chakra-ui/react";

const AddCartButton = ({ children, ...otherprops }) => {
  return (
    <Button bg={"#737FF7"} width={"full"}  otherprops={otherprops}>
      {children}
    </Button>
  );
};

export default AddCartButton;
