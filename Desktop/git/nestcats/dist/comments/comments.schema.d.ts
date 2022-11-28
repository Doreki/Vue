/// <reference types="mongoose/types/pipelinestage" />
import { Document, Types } from 'mongoose';
export declare class Comment extends Document {
    author: Types.ObjectId;
    contents: string;
    likeCount: number;
    info: Types.ObjectId;
}
export declare const CommentsSchema: import("mongoose").Schema<Comment, import("mongoose").Model<Comment, any, any, any>, any, any>;
