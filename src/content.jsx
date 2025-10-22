import { Link } from "react-router"
export default function Content(){
    return (
        <div id="category">
       <Link to="/men" className="cate-link"> 
        <div className="cate" id="cate1"><div className="text">MEN'S</div></div>
        </Link>
         <Link to="/women" className="cate-link">  <div className="cate" id="cate2"><div className="text">WOMEN'S</div></div></Link>
          <Link to="/elec" className="cate-link"> <div className="cate" id="cate3"><div className="text">ACCESSORIES</div></div></Link>

           
        </div>

    )
}