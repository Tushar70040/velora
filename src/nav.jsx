import {Link} from "react-router"
export default function Nav({cart}){

    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    return(
        <div className="nav">
            <h2>VELORA</h2>
            <div className="navlink">
               <Link to="/"> <button className="btn">HOME</button></Link>
                <Link to="/shop"> <button className="btn">SHOP</button></Link>
              <Link to="/cart"><button className="btn">CART
                <div className="count">{totalItems}</div></button></Link>
            </div>
        </div>
    )

}