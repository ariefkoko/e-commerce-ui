import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ExploreProduct from "./pages/ExploreProduct";
import Filter from "./pages/Filter";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path="/filter">
						<Filter />
					</Route>
					<Route path="/">
						<ExploreProduct />
					</Route>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
