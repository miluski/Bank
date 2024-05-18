import { InformationTexts } from "./InformationTexts";

export type Tile = {
	title: string;
	description: string;
	bgColor: string;
	informationTexts?: InformationTexts;
	imageUrl?: string;
	percent?: number;
	minimumAmount?: number;
	maximumAmount?: number;
	monthsNumber?: number;
};
