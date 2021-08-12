import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Job} from "./job";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({type: 'varchar'})
    readonly name: string

    @OneToMany(()=> Job, job => job.role, { onDelete: 'CASCADE' })
    readonly jobs: Job[];
}
