import { BrowserRouter, Route, Switch } from "react-router-dom";
import Head from "./components/Head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BecomeGuest from "./pages/BecomeGuest";

function App() {
	/**
	 * Page titles are to be maintained by redux
	 */
	return (
		<BrowserRouter>
			<Head/>
			<Header/>
			<Switch>
				<Route exact path={ "/" } component={ Home }/>
				<Route exact path={ "/becomeGuest" } component={ BecomeGuest }/>
			</Switch>
			<Footer/>
		</BrowserRouter>
	);
}

export default App;
