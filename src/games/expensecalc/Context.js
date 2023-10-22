import { useEffect } from "react";
import { createContext, useState } from "react";


const cartContext = createContext();

export function CartProvider({children}){

    const [user, setUser]= useState('')
    const [savedData, setSavedData] = useState(null);
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('expenseData'));
        if (savedData) {
          setSavedData(savedData);
        }
    }, []);
    const handleSave = () => {
        const data = {
          user: user
        };
    
        localStorage.setItem('expenseData', JSON.stringify(data));
        setSavedData(data);
    };


    const [cartitems, setCartitems] = useState([]);

    const myArray=[]
    var i = 0
    while(i <= 10){
        myArray.push(i);
        i++;
    }

    const addtocart = (name, price, image, quantity, id) => {
        quantity++
        setCartitems((prevState) => [...prevState, {name, price, image, quantity, id}]) //to add new objects to the previous array, keep o;d arrya nd add new onw
    };


    const qtybtn = (quantity) => {
        
    };

    const handledelete = (name) => {
        const newcart = cartitems.filter(item => item.name !== name);
        setCartitems(newcart);
    }

    const flt= cartitems.reduce((accumulator, object) => {
        return accumulator + object.price;
    }, 0);

    return(
        <cartContext.Provider value={{cartitems, addtocart, user, setUser, 
            myArray, qtybtn, handledelete, flt, savedData, setSavedData, handleSave
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default cartContext;