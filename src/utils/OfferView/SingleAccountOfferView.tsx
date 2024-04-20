import { useSelector } from "react-redux";
import { State } from "../State";
import { Button, Image } from "antd";
import "./styles/SingleAccountOfferView.css";
import { useNavigate } from "react-router";

export default function SingleAccountOfferView() {
	const { productType, informationTexts, imageUrl } = useSelector(
		(state: State) => state
	);
	const navigate = useNavigate();
	return (
		<div className='mainDiv'>
			<text className='accontTypeText'>{productType}</text>
			<div className='mainContentDiv'>
				<div className='mainInformationDiv'>
					<div className='informationTextsDiv'>
						<text className='headInformationText'>
							{informationTexts.headerText}
						</text>
						{informationTexts.informationTextsArray.map(
							(informationText: String, index: number) => (
								<text key={index} className='singleInformationText'>
									{"• " + informationText}
								</text>
							)
						)}
					</div>
					<Image
						width={425}
						height={475}
						src={imageUrl}
						preview={false}
						className='advertisementImage'
					/>
				</div>
				<Button
					className='goFurtherButton'
					onClick={() => {
						navigate("/open-account");
					}}>
					Otwórz konto {"->"}
				</Button>
			</div>
		</div>
	);
}
