import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import { useState } from 'react';

function App() {
	const [login, setLogin] = useState();

	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<Login />}
				></Route>
				<Route
					path="/home"
					element={<Home />}
				></Route>
				<Route
					path="/products"
					element={<Products />}
				></Route>
				<Route
					path="/productdetails"
					element={<ProductDetails />}
				></Route>

				<Route
					path="/about"
					element={<About />}
				></Route>
				<Route
					path="/contact"
					element={<Contact />}
				></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
