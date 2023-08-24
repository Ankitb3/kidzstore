import { Button } from "@chakra-ui/react";

const AddCartButton = ({ children,Addcart, ...otherprops  }) => {
 
  return (
    <Button bg={"#737FF7"} width={"full"}  otherprops={otherprops} onClick={Addcart}>
      {children}
    </Button>
  );
};

export default AddCartButton;
