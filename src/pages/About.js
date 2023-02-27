import React from 'react';
import Navbar from '../components/Navbar';
import Fashion_about from '../Images/Fashion_about.jpg';
import Featured_about from '../Images/Featured_about.jpg';
import '../styles/about.css';

const About = () => {
	return (
		<div>
			<Navbar />
			<div className="about">
				<div
					className="topContainer"
					style={{
						backgroundImage: `url(${Fashion_about})`,
					}}
				>
					<h1 style={{ marginTop: '0px' }}>WELCOME TO FASHION ARTS</h1>
				</div>
				<div className="bottomContainer">
					<div className="aboutLeft">
						<img src={Featured_about} />
					</div>

					<div className="aboutRight">
						<h2> ABOUT US </h2>
						<span
							style={{
								color: 'black',
								fontSize: '21px',
								fontFamily: 'cursive',
							}}
						>
							Fashion is a non-verbal way of communication that conveys a lot
							about the person’s personality, background and style. Earlier it
							was exclusively the world of the affluent, celebrities and
							royalty. However, fashion is now within the reach of the common
							man, especially the youth. Besides, dress fashion is an evolution
							of ideas, which begins as a fad, but in course of time gets
							accepted in society as a style, which could be in attire,
							behaviour or lifestyle. Fashion is mostly associated with glamour.
							It makes people feel confident and bold. People can express
							themselves openly. Today fashion is not limited to western
							countries; now, every country has come out with their fashion
							sense, not only the clothing but the accent of that country, the
							living style. From the 1920s to the 1990s fashion just not changed
							in clothing but also in accessories, footwear and hairstyles. The
							trends of wearing hats, carrying purses, shoes and men wearing
							long ties and bows have been continuously changing with periods,
							occasions and culture.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
