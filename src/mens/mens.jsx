import Nav from "../nav";
import Men from "./men";

export default function Mens({add,cart}){

   return(
    <>
     <Nav cart={cart}/>
     <Men add={add}/>
   
    </>
   )


}