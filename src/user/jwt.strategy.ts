import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport/dist";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "./jwt-payload.interface";
import { User } from "./entities/user.entity";
import { UserRepository } from "./user.repository";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        
        private configService: ConfigService,
        @InjectRepository(UserRepository)
        private userRepository: UserRepository) {
        super({
            secretOrKey: configService.get('JWT_SECRET'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        });
    }
    async validate(payload: JwtPayload):Promise<User> {
        const { email } = payload;
        const user: User = await this.userRepository.findOne({ email: email });

        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}