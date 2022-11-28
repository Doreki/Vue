import { CatsRepository } from 'src/cats/cats.repository';
import { Comment } from './comments.schema';
import { CommentsCreateDto } from './dtos/comments.create.dto';
import { Model } from 'mongoose';
export declare class CommentsService {
    private readonly commentsModel;
    private readonly catsRepository;
    constructor(commentsModel: Model<Comment>, catsRepository: CatsRepository);
    getAllComments(): Promise<(Comment & {
        _id: any;
    })[]>;
    createComment(id: string, commentData: CommentsCreateDto): Promise<Comment & {
        _id: any;
    }>;
    plusLike(id: string): Promise<Comment & {
        _id: any;
    }>;
}
