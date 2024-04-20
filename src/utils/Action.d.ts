import { InformationTexts } from "./OfferView/InformationTexts";

export type Action = {
    type: string;
    newSite: string;
    newProductType: string;
	newInformationTexts: InformationTexts;
    newImageUrl: string;
    newPercent: number;
    newMinimumAmount: number;
    newMaximumAmount: number;
    newScale: string;
};