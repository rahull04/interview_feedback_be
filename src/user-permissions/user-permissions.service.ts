import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager } from 'typeorm';
import { CreateUserPermissionsDto } from './dto/createUserPermissions.dto';

@Injectable()
export class UserPermissionsService {
  async create(createUserPermissionsDto: CreateUserPermissionsDto) {
    return this.create(createUserPermissionsDto);
  }
  async getPermissionsByRole(role: string) {
    const entityManager = getManager();
    const permissions = await entityManager.query(
      `select id,role,permissions from user_permissions where user_permissions.role='${role}'`,
    );
    return permissions[0];
  }
}
