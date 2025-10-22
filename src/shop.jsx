import Product from "./product";
import Nav from "./nav";
import Content from "./content";
import Footer from "./footer";
export default function Shop({add,cart}){
    return(
        <>
            <Nav cart={cart}/>
            <Product add={add}/>
            <Footer/>
            
           
        </>

    )

}