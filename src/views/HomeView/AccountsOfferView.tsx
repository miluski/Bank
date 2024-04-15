import { Image } from "antd";

export default function AccountsOfferView() {
	return (
		<div className='leadContentDiv'>
			<div className='advertisementsDiv'>
				<div className='advertisementsTexts'>
					<text className='accountsOfferText'>Oferta kont bankowych</text>
					<text className='advertismentText'>
						Chcesz uwolnić się od opłat za użytkowanie konta bankowego?
					</text>
					<text className='advertismentText'>Załóż już dzisiaj konto w naszym banku!</text>
				</div>
				<Image
					width={475}
                    height={253}
					src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                    preview={false}
                    className="advertisementImage"
				/>
			</div>
		</div>
	);
}
