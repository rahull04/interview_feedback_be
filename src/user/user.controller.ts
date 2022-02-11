import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedUserDto } from './dto/authenticated-user.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { User } from './entities/user.entity';
import { GetUser } from './get-user.decorator';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('')
  @UseGuards(AuthGuard())
  findAll(@GetUser() user: User) {
    console.log(user);
    return this.userService.fetchUser();
  }

  @Get('search/:search')
  @UseGuards(AuthGuard())
  async findBySearch(@Param() search: string, @GetUser() user: User) {
    const data = await this.userService.findBySearch(search, user);
    return data;
  }


  @Post('/register')
  @HttpCode(200)
  async createUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.checkIfExists(createUserDto.email);
    if (user) {
      throw new ForbiddenException('User already exists');
    }
    return this.userService.createUser(createUserDto);
  }

  @Post('/login')
  @HttpCode(200)
  // @UsePipes(new ValidationPipe())
  async login(@Body() user: LoginUserDto): Promise<AuthenticatedUserDto> {
    const userData = await this.userService.login(user);
    return userData;
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateQuoteDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateQuoteDto);
  }

  @Delete(':id')
  deleteQuote(@Param('id') id) {
    return this.userService.deleteUser(id);
  }
}
