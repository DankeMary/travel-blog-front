import { Place } from "./place.model";

export class PostPiece {
    constructor(
        /* public text: string,
        public place: string,
        public attachment: string */
        public pieceId: number,
        //public post;
        public place: Place,
        public textt: string
    ) { }
}