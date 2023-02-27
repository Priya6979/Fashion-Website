import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Productdetails.css';

const ProductDetails = () => {
	const location = useLocation();
	console.log('data', location.state.data);
	const info = location.state.data;
	const navigate = useNavigate();
	return (
		<div>
			<Navbar />
			<div className="productDetails">
				<div className="detailsLeft">
					<img src={info.image} />
				</div>
				<div className="detailsTop">
					<div className="detailsRight">
						<h2>{info.title}</h2>
						<span> PRICE :{info.price}</span>

						<span>
							COUNT :{info.rating.count},<span> RATE : {info.rating.rate}</span>
						</span>
					</div>
					<div className="detailsBottom">
						<p style={{ color: 'black' }}>
							<h1 style={{ color: 'crimson', fontSize: '24px' }}>
								DESCRIPTION
							</h1>
							{info.description}
						</p>
					</div>
					<button
						className="productDetailsbutton"
						onClick={() => navigate(-1)}
					>
						GO BACK
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
