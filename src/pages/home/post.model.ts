import { PostPiece } from "./post-piece.model";

export class Post{
    constructor(
        public title: string,
        public postPieces: Array<PostPiece>
    ){}
}