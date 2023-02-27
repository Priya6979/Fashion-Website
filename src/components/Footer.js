import React from 'react';
import InstragramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<div className="socialMedia">
				<InstragramIcon />
				<TwitterIcon />
				<FacebookIcon />
				<a href="https://www.linkedin.com/in/priya-bijay-335675251/">
					<LinkedInIcon />
				</a>
				<a href="https://github.com/Priya6979/">
					<GithubIcon />
				</a>
			</div>
			<p> &copy; 2023 FashionArt.com</p>
		</div>
	);
};

export default Footer;
