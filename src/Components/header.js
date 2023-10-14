import { useState } from "react";
import { Link } from "react-router-dom";
import './headerstyle.css'

const Header = () => {


    const [showHidprod, setShowhidprod] = useState(false);
    let [menuchage, setMenuchage] = useState(true) 
    const handleHidprod = () => {
        setShowhidprod(!showHidprod)
        setMenuchage(!menuchage)
    };


    return (
        <div className="header">
            <div className="header-content">
                <span onClick={handleHidprod} className="menuff" >{menuchage ? 'menu' : 'X'}</span>
                {showHidprod &&
                    <div className="hidprod" >
                        <h3>TEMI'S GAME</h3>
                        <Link to='/doi' className='nav-link'>Dead and Injured</Link>
                    </div>
                }
                <h2><Link to= '/'>T Games</Link> </h2>
            </div>
        </div>
    );
}
 
export default Header;