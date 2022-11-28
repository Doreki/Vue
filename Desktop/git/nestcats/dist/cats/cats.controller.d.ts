/// <reference types="multer" />
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';
import { AuthService1 } from 'src/auth/auth.service';
import { LoginRequestDto1 } from 'src/auth/dto/login.request.dto';
import { Cat } from './cats.schema';
export declare class CatsController {
    private readonly catsService;
    private readonly authService;
    constructor(catsService: CatsService, authService: AuthService1);
    getCurrentCat(cat: any): any;
    signUp(body: CatRequestDto): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    }>;
    logIn(data: LoginRequestDto1): Promise<{
        token: string;
    }>;
    logOut(): string;
    uploadCatImg(files: Array<Express.Multer.File>, cat: Cat): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    }>;
}
