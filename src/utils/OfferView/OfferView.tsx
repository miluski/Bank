import { Image } from "antd";
import "./styles/OfferView.css";
import { Advertisements } from "./Advertisements";

export default function OfferView(props: {
	advertisementsTexts: Advertisements;
	imageUrl: string;
}) {
	return (
		<div className='leadContentDiv'>
			<div className='advertisementsDiv'>
				<div className='advertisementsTexts'>
					<text className='accountsOfferText'>
						{props.advertisementsTexts.accountsOfferText}
					</text>
					<text className='advertismentText'>
						{props.advertisementsTexts.advertismentUpperText}
					</text>
					<text className='advertismentText'>
						{props.advertisementsTexts.advertismentLowerText}
					</text>
				</div>
				<Image
					width={475}
					height={253}
					src={props.imageUrl}
					preview={false}
					className='advertisementImage'
				/>
			</div>
		</div>
	);
}
