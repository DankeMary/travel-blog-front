import { Country } from "./country.model";

export class Region {
    constructor(        
        public regionId: number,
        public country: Country,
        public namee: string
    ) { }
}