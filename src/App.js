import { Routes, Route } from "react-router-dom";
import Doi from "./games/DOI/Doi";
import Homepage from "./games/homepage/Homepage";

function App() {

	
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={ <Homepage/> } />
          		<Route path="/doi" element={ <Doi /> } />
			</Routes>
		</div>
	);
}


export default App;