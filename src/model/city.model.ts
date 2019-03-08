import { Region } from "./region.model";

export class City {
    constructor(        
        public cityId: number,
        public region: Region,
        public namee: string,
        public latitude: string,
        public longitude: string
    ) { }
}