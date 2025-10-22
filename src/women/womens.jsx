import Nav from "../nav";
import Women from "./women";

export default function Womens({add,cart}){

   return(
    <>
     <Nav cart={cart}/>
     <Women add={add}/>
   
    </>
   )


}