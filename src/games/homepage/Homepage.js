import { Link } from "react-router-dom";
import Header from "../../Components/header";
import './homestyle.css'
import dai from '../../Components/dai.png'

const Homepage = () => {
    return (
        <div className="homepage">
            <Header />
            <div className="hpbg">
                <h1>Today's Puzzle</h1>
                <Link to='/doi' className="games">
                    <img src={dai} alt="img" width={100}/>
                    <h3>Dead and Injured</h3>
                </Link>
            </div>

        </div>
    );
}
 
export default Homepage;