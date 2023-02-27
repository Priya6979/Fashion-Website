import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fashion_logo from '../Images/Fashion_logo.png';
import Fashion_word from '../Images/Fashion_word.png';

import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
	const [openLinks, setOpenLinks] = useState(false);
	const toggleNavbar = () => {
		setOpenLinks(!openLinks);
	};
	return (
		<div className="navbar">
			<div
				className="leftside"
				id={openLinks ? 'open' : 'close'}
			>
				<img src={Fashion_logo} />

				<h1 className="logo">Fashion World</h1>

				<div className="hiddenLinks">
					<Link to="/home"> Home</Link>
					<Link to="/products"> Products</Link>
					<Link to="/about"> About</Link>
					<Link to="/contact"> Contact</Link>
				</div>
			</div>

			<div className="rightside">
				<Link to="/home"> Home</Link>
				<Link to="/products"> Products</Link>
				<Link to="/about"> About</Link>
				<Link to="/contact"> Contact</Link>
				<button onClick={toggleNavbar}>
					<ReorderIcon />
				</button>
			</div>
		</div>
	);
};

export default Navbar;
