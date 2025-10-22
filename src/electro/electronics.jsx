import Nav from "../nav";
import Electronic from "./electronic";

export default function Electronics({add,cart}){

   return(
    <>
     <Nav cart={cart}/>
     <Electronic add={add}/>
   
    </>
   )


}