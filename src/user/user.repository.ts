import { ForbiddenException, NotFoundException } from '@nestjs/common';
import {
  EntityManager,
  EntityRepository,
  getManager,
  Repository,
} from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createQuote(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    let { fullname, password, email } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    let newUser = {
      fullname: fullname,
      password: hashedPassword,
      email: email,
      img: null,
    };
    const userExists = await this.checkIfExists(email);
    if (userExists) {
      throw new ForbiddenException('User already exists');
    }
    return await this.save(newUser);
  }

  async login(user: LoginUserDto) {
    let { email, password } = user;
    const query = this.createQueryBuilder('user');
    query.andWhere('user.email = :email', {
      email
    });
    const users = await query.getOne();
    const isMatch = await bcrypt.compare(password, users.password);
    console.log(isMatch)
    if(!isMatch) throw new NotFoundException(`Invalid user credentials`);
    return users;
  }

  async checkIfExists(email: string) {
    const query = this.createQueryBuilder('user');
    query.andWhere('user.email = :email', { email });
    const users = await query.getOne();
    return users;
  }

  async findBySearch(search: string, user: User) {
    const entityManager = getManager();
    const someQuery = await entityManager.query(
      `SELECT "user"."id", "user"."email", "user"."fullname", "user"."img" FROM public.user WHERE "user"."email" LIKE '%${search.search}%' and "user".email != '${user.email}'`,
    );
    return someQuery;
  }
}
