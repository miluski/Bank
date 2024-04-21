import { InformationTexts } from "./OfferView/InformationTexts";

export type State = {
    site: string;
    productType: string;
    informationTexts: InformationTexts;
    imageUrl: string;
    percent: number;
    minimumAmount: number;
    maximumAmount: number;
    scale: string;
    currentRegisterPage: string;
    selectedAccountTypeIndex: number;
}