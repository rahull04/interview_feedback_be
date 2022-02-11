import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserRoles } from 'src/core/enum/userRoles';

export class CreateUserPermissionsDto {
  @IsNotEmpty()
  @IsEnum(UserRoles)
  role: UserRoles;

  @IsNotEmpty()
  @IsString()
  permission: string;
}
