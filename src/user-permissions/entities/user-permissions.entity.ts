import { AuditingEntity } from 'src/core/entities/auditing.entity';
import { UserRoles } from 'src/core/enum/userRoles';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserPermissions extends AuditingEntity {
  @Column({
    type: 'enum',
    enum: UserRoles,
  })
  role: UserRoles;

  @Column()
  permissions: string;
}
