import { Location } from "./location";

export interface Home {
    id: string;
    abbr_address?: string;
    bathrooms?: number;
    bedrooms?: number;
    parkings?: number;
    sqare_mts?: number;
    location?: Location;
    name?: string;
    pet_friendly?: boolean;
    photos?: string[];
    price?: number;
    is_homie_exclusive?: boolean;
}