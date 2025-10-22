import { useState, useEffect } from "react";

export default function Women({add}) {
    const [product, setProduct] = useState([]);

    useEffect(()=>{

        productlist();
    } ,[]);



  async function productlist(){

    const data = await fetch("https://fakestoreapi.com/products/category/women's clothing").then((res) => res.json());
    setProduct(data);
  }



  return(
    <div className="product">
     
     
        {product.map((items)=>
           <div className="item" key={items.id}>
             <img className="img" src={items.image} alt={items.title}/>
            <div className="details">
                <p>{items.title}</p>
                <h3>${items.price}</h3>
                 <button className="add" onClick={()=>add(items) } >ADD TO CART</button>

            </div>

           
           </div>
            
        )}
    </div>
  )

   

}