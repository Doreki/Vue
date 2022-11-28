import { Model, Types } from 'mongoose';
import { Cat } from './cats.schema';
import { CatRequestDto } from './dto/cats.request.dto';
import * as mongoose from 'mongoose';
export declare class CatsRepository {
    private readonly catModel;
    constructor(catModel: Model<Cat>);
    findAll(): Promise<(Cat & {
        _id: any;
    })[]>;
    findCatByIdWithoutPassword(catId: string | Types.ObjectId): Promise<Cat | null>;
    findCatByEmail(email: string): Promise<Cat | null>;
    existsByEmail(email: string): Promise<Pick<mongoose.Document<Cat, any, any>, "_id">>;
    create(cat: CatRequestDto): Promise<Cat>;
    findByIdAndUpdateImg(id: string, fileName: string): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    }>;
}
