import Nav from "../nav";
import Men from "./men";
import { cartcontext } from "../main";
import { useContext } from "react";

export default function Mens(){
   const {add, cart} = useContext(cartcontext)

   return(
    <>
     <Nav cart={cart}/>
     <Men add={add}/>
   
    </>
   )


}