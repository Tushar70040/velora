import { Link } from "react-router"
export default function Header(){
    return(
        <div className="header">
            <div className="main">
                <div className="sign">
                    <div className="title">VELORA</div>
                    <div className="subtitle">REFINED CHOICES<br></br> FOR THE MORDERN YOU</div>
                    <div><Link to="shop"><button className="shop">SHOP NOW </button></Link></div>
                </div>
              
            </div>

        </div>
    )
}