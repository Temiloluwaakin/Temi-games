import { Link } from 'react-router-dom';
import './expencestyle.css'
import { useContext} from 'react';
import cartContext from './Context';

const Expensecalc = () => {

    const {setUser} = useContext(cartContext)
    const {handleSave} = useContext(cartContext)

    return (
        <div className="expencecalc-userpg">
            <div className='user-border'>
                <h2>Welcome to ExpenseCalc</h2>
                <p>A very simple app that adds all your expenses.</p>

                <input
                    type="text"
                    onChange={(e) => setUser(e.target.value)}
                    placeholder='What is your name'
                />
                <Link to='/expencehp'>
                    <button onClick={handleSave}>Get Started</button>
                </Link>
            </div>
        </div>
    );
}
 
export default Expensecalc;