import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Products.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Products = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [item, setItem] = useState('');

	useEffect(() => {
		axios
			.get('https://fakestoreapi.com/products')
			.then((res) => {
				setProducts(res.data);
				console.log(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div>
			<Navbar />
			<div>
				<i
					class="fa fa-search"
					aria-hidden="true"
				></i>
				<input
					className="searchbar"
					type="text"
					placeholder="Search Items..."
					onChange={(e) => setItem(e.target.value)}
				/>

				{isLoading ? (
					<h1 style={{ color: 'black', padding: '220px' }}> LOADING...</h1>
				) : (
					<div className="product ">
						{products
							.filter((data) => {
								if (item === '') {
									return data;
								} else if (
									data.title.toLowerCase().includes(item.toLocaleLowerCase())
								) {
									return data;
								}
							})
							.map((data, index) => {
								return (
									<div
										key={index}
										className="product_item"
									>
										<img
											src={data.image}
											className="productImg"
											alt="pic"
										/>

										<Link
											to="/productdetails"
											state={{ data: data }}
										>
											<p style={{ color: 'black' }}>{data.title}</p>
										</Link>
										<p style={{ color: 'black' }}>${data.price}</p>
										<span style={{ color: 'black' }}>
											{data.rating.count} reviews
										</span>
										<span style={{ color: 'black' }}>{data.rating.rate}</span>
									</div>
								);
							})}
					</div>
				)}
			</div>
		</div>
	);
};

export default Products;
