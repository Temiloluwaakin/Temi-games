import { Routes, Route } from "react-router-dom";
import Doi from "./games/DOI/Doi";
import Homepage from "./games/homepage/Homepage";
import Expencecalc from './games/expensecalc/Expencecalc'
import Expencehp from './games/expensecalc/Expencehp'
import { CartProvider } from "./games/expensecalc/Context";

function App() {

	
	return (
		<div className="App">
			<CartProvider>		
				<Routes>
					<Route path="/" element={ <Homepage/> } />
					<Route path="/doi" element={ <Doi /> } />
					<Route path="/expencecalc" element= { <Expencecalc />} />
					<Route path="/expencehp" element= { <Expencehp />} />
				</Routes>
			</CartProvider>
		</div>
	);
}


export default App;