import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthenticatedUserDto } from './dto/authenticated-user.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { User } from './entities/user.entity';
import { JwtPayload } from './jwt-payload.interface';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private userRepository,
    private jwtService: JwtService,
  ) {}

  fetchUser() {
    return this.userRepository.find();
  }

  findBySearch(search: string, user: User) {
    return this.userRepository.findBySearch(search, user);
  }

  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<AuthenticatedUserDto> {
    const user: User = await this.userRepository.createQuote(createUserDto);
    const { fullname, email, id, img, type } = user;
    const payload: JwtPayload = { email: user.email };
    const accessToken = await this.jwtService.sign(payload);
    const resp: AuthenticatedUserDto = {
      type,
      fullname,
      email,
      id,
      accessToken,
      img,
    };
    return resp;
  }

  async login(user: LoginUserDto) {
    const userData = await this.userRepository.login(user);
    if (!userData) {
      throw new NotFoundException(`Invalid user credentials`);
    }
    const { fullname, email, id, img, type } = userData;
    const payload: JwtPayload = { email: email };
    const accessToken = await this.jwtService.sign(payload);
    const resp: AuthenticatedUserDto = {
      type,
      fullname,
      email,
      id,
      accessToken,
      img,
    };
    return resp;
  }

  async getUserById(id: string): Promise<CreateUserDto> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with "${id}" not found.`);
    }
    return user;
  }

  async updateUser(id: any, updateUser: UpdateUserDto): Promise<UpdateUserDto> {
    const oldUser = await this.getUserById(id);
    const { fullname, password, img, type } = updateUser;
    if (fullname) {
      oldUser.fullname = fullname;
    }
    if (password) {
      oldUser.password = password;
    }
    if (img) {
      oldUser.img = img;
    }
    if (type) {
      oldUser.type = type;
    }
    return await this.userRepository.save(oldUser);
  }

  async deleteUser(id: string): Promise<string> {
    const user = await this.getUserById(id);
    return await this.userRepository.remove(user);
  }

  async checkIfExists(email: string) {
    return await this.userRepository.checkIfExists(email);
  }
}
