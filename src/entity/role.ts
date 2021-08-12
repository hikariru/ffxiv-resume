import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Job} from "./job";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    name: string

    @OneToMany(()=> Job, job => job.role, { onDelete: 'CASCADE' })
    jobs: Job[];
}
