import { CatsRepository } from './../cats/cats.repository';
import { LoginRequestDto1 } from './dto/login.request.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService1 {
    private readonly catsRepository;
    private jwtService;
    constructor(catsRepository: CatsRepository, jwtService: JwtService);
    jwtLogIn(data: LoginRequestDto1): Promise<{
        token: string;
    }>;
}
