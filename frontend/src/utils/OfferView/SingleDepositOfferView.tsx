import { CiPercent } from "react-icons/ci";
import { GiSpeedometer } from "react-icons/gi";
import { IoMdSpeedometer } from "react-icons/io";
import { useSelector } from "react-redux";
import { SiteState } from "../types/State";
import { Button } from "antd";
import "./styles/SingleDepositOfferView.css";
import { useNavigate } from "react-router";

export default function SingleDepositOfferView() {
	const {
		productType,
		percent,
		minimumAmount,
		maximumAmount,
		scale,
		isLoggedIn,
	} = useSelector((state: SiteState) => state.siteReducer);
	const navigate = useNavigate();
	return (
		<div className='mainDiv'>
			<text className='depositTypeText'>{productType}</text>
			<div className='mainContentDiv'>
				<div className='mainInformationDiv'>
					<CiPercent size={256} />
					<div className='informationDiv'>
						<text className='headInformationText'>Oprocentowanie</text>
						<text className='bodyInformationText'>
							Gwarantujemy stałe oprocentowanie {percent} % {scale}
						</text>
					</div>
					<IoMdSpeedometer size={256} />
					<div className='informationDiv'>
						<text className='headInformationText'>Kwota minimalna</text>
						<text className='bodyInformationText'>
							Wymagana minimalna kwota do założenia tej lokaty to{" "}
							{minimumAmount} PLN
						</text>
					</div>
					<GiSpeedometer size={256} />
					<div className='informationDiv'>
						<text className='headInformationText'>Kwota maksymalna</text>
						<text className='bodyInformationText'>
							Maksymalna kwota na którą można założyć tę lokatę to{" "}
							{maximumAmount} PLN
						</text>
					</div>
				</div>
				<Button
					className='goFurtherButton'
					onClick={() => {
						isLoggedIn ? navigate("/create-deposit") : navigate("/login");
					}}>
					Otwórz lokatę {"->"}
				</Button>
			</div>
		</div>
	);
}
