import { Column, PrimaryGeneratedColumn } from "typeorm";

export abstract class PersistentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;


}