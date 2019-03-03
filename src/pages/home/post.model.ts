import { PostPiece } from "./post-piece.model";

export class Post {
    constructor(        
        public postId: number,
        public title: string,
        public createdOn: Date,
        public userr: number, //UserrEntity
        public onCheck: boolean,
        public approved: boolean,
        public commentary: string,
        public postPieces: Array<PostPiece>
    ) { }
}