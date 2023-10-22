import { useContext} from "react";
import { Link } from 'react-router-dom';
import cartContext from "./Context";
import './expencestyle.css'



const Expencehp = () => {

    //const {user} = useContext(cartContext)
    const {savedData} = useContext(cartContext)

    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', {month: 'long'});
    const year = currentDate.getFullYear();

    return (
        <div className="expencehp">
            <div className="hp-border">
                <div className="topp">
                    <div className="top-top" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <span style={{display:'flex',  alignItems:'center'}}>
                            <h1 id="circle-name"> {savedData.user[0]} </h1>
                            {savedData && (
                                <div>
                                    <p>Hi, {savedData.user}</p>
                                </div>
                            )}
                        </span>
                        <p>{`${month}, ${year}`}</p>
                    </div>
                    <div className="btm-top" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <span>
                            <p>Amount spent</p>
                            <h2>₦ 800.00</h2>
                        </span>
                        <button id="new-expense">+ New expense</button>
                    </div>
                </div>
                <div className="middle" >
                    <span style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <p>Recent expenses</p>
                        <Link to='#'>See all</Link>
                    </span>
                    <div className="expenses">
                        
                    </div>
                </div>
            </div>
            <div className="btm">
                    <button id="red-clear">Clear all Expenses</button>
                    <button id="green-close">Close App</button>
            </div>
        </div>
    );
}
 
export default Expencehp;