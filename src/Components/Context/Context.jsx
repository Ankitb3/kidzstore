import axios from "axios";
import { createContext, useEffect, useState } from "react"


export const Cart= createContext()
const Context = ({children}) => {
  const [Products,setProducts] = useState([])
  const [cartitem,setCartitem] = useState([])

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_APP_PUBLIC_API_KEY)
      .then((result) => {
        setProducts(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Cart.Provider value={{Products,cartitem,setCartitem}}>{children}</Cart.Provider>
  )
}

export default Context