
import Nav from "./nav";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";


export default function Home({cart}){
    return(
        <>
        <Nav cart={cart}/>
        <Header/>
         <Content/>
         <Footer/>
      
        </>

    )
}