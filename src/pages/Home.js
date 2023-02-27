import React from 'react';
import Home_img from '../Images/Home_img.jpg';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import Navbar from '../components/Navbar';

const Home = () => {
	const navigate = useNavigate();

	return (
		<div>
			<Navbar />
			<div
				className="homeContainer"
				style={{
					backgroundImage: `url(${Home_img})`,
				}}
			>
				<div className="home">
					<h1>Fashion Art</h1>
					<p> ENHANCE YOUR BEAUTY BEYOND FASHION </p>
					<button onClick={() => navigate('/products')}>
						{' '}
						CLICK HERE TO SEE
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
