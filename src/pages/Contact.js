import React from 'react';
import Navbar from '../components/Navbar';
import Fashion_week1 from '../Images/Fashion_week1.webp';
import '../styles/contact.css';

const Contact = () => {
	return (
		<div>
			<Navbar />
			<div className="contact">
				<img
					className="leftside"
					src={Fashion_week1}
				/>
				<div className="rightside">
					<div className="rightChild">
						<h1 style={{ color: 'white', marginBottom: '40px' }}>
							{' '}
							CONTACT US{' '}
						</h1>
						<form
							id="contact-form"
							method="POST"
						>
							<div className="parent">
								<div
									className="align"
									style={{ gap: '40px', fontWeight: 'bold' }}
								>
									<label htmlFor="name"> User Name</label>
									<label htmlFor="email"> Email</label>
									<label htmlFor="message"> Message</label>
								</div>

								<div
									className="align"
									style={{ gap: '40px' }}
								>
									<input
										className="no-outline"
										name="name"
										placeholder="Enter Your Name..."
										type="text"
										style={{ width: '165px', height: '16px' }}
									/>

									<input
										className="no-outline"
										name="email"
										placeholder="Enter email..."
										type="email"
										style={{ width: '165px', height: '18px' }}
									/>

									<textarea
										className="no-outline"
										rows="6"
										placeholder="Enter a Message"
										name="message"
										required
										style={{ width: '165px', height: '16px' }}
									></textarea>
								</div>
							</div>

							<button
								type="submit"
								className="btn"
							>
								{' '}
								Send Message{' '}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
