import { Layout } from "antd";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./styles/FooterStyles.css";

const { Footer } = Layout;

export default function FooterView() {
	return (
		<Footer className='footer'>
			<div className='leftContent'>
				<text className='topTexts'>Call us</text>
				<text className='phoneText'>+48 213 721 151</text>
			</div>
			<text className='copyrightText'>2024 © Bank</text>
			<div className='rightContent'>
				<text className='topTexts'>Socials</text>
				<div className='icons'>
					<FaFacebook
						className='social-icon'
						size={32}
						color='#0866ff'
						onClick={() => (window.location.href = "https://facebook.com")}
					/>
					<FaLinkedin
						className='social-icon'
						size={32}
						color='#0a66c2'
						onClick={() => (window.location.href = "https://linkedin.com")}
					/>
					<FaInstagram
						className='social-icon'
						size={32}
						onClick={() => (window.location.href = "https://instagram.com")}
					/>
				</div>
			</div>
		</Footer>
	);
}
