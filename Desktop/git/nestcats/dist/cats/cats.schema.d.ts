/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
export declare class Cat extends Document {
    email: string;
    name: string;
    password: string;
    imgUrl: string;
    readonly readOnlyData: {
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    };
    readonly comments: Comment[];
}
export declare const _CatSchema: import("mongoose").Schema<Cat, import("mongoose").Model<Cat, any, any, any>, any, any>;
export declare const CatSchema: import("mongoose").Schema<Cat, import("mongoose").Model<Cat, any, any, any>, any, any>;
