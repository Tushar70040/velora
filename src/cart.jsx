import Footer from "./footer";
import { useContext } from "react";
import { cartcontext } from "./main";
import Nav from "./nav";


export default function Cart() {
    const{ add,cart,remove} = useContext(cartcontext)
    return (
        <>
            <Nav cart={cart} />
            <div className="prodcart">
                <div className="carthead">
                    <div>
                        <h2>YOUR PRODUCT</h2>
                        {cart.length === 0 && <h3>YOUR CART IS EMPTY</h3>}
                    </div>
                </div>

                <div className="cartpro">
                    {cart.map((item) => (
                        <div className="item" key={item.id}>
                            <img className="img" src={item.image} alt={item.title} />
                            <div className="details">
                                <h3>{item.title}</h3>
                                <h4>${item.price}</h4>
                            </div>
                            <div className="qty">
                                <span><h3> Quantity:{item.qty}</h3></span>
                                <div className="cartbtn">
                                    <button className="add" onClick={() => remove(item)}>REMOVE</button>
                                    <button className="add" onClick={() => add(item)}>ADD</button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>



            </div>
            <Footer />
        </>
    )
}