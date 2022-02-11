import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiConflictResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { CreateUserPermissionsDto } from './dto/createUserPermissions.dto';
import { UserPermissions } from './entities/user-permissions.entity';
import { UserPermissionsService } from './user-permissions.service';

@Controller('user-permissions')
export class UserPermissionsController {
  constructor(
    private readonly userPermissionsService: UserPermissionsService,
  ) {}

  @ApiCreatedResponse({ description: 'Create User permission' })
  @ApiConflictResponse({
    description: 'Could not create User permission.',
  })
  @Post()
  create(
    @Body() createUserActivtyTrackingDto: CreateUserPermissionsDto,
  ): Promise<UserPermissions> {
    return this.userPermissionsService.create(createUserActivtyTrackingDto);
  }

  @Get('/:role')
  async getByRole(@Param('role') role: string) {
    return this.userPermissionsService.getPermissionsByRole(role);
  }
}
