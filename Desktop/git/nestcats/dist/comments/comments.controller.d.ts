import { CommentsCreateDto } from './dtos/comments.create.dto';
import { CommentsService } from './comments.service';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    getAllComments(): Promise<(import("./comments.schema").Comment & {
        _id: any;
    })[]>;
    createComment(id: string, body: CommentsCreateDto): Promise<import("./comments.schema").Comment & {
        _id: any;
    }>;
    plusLike(id: string): Promise<import("./comments.schema").Comment & {
        _id: any;
    }>;
}
