import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Role} from "./role";

@Entity({name: 'jobs'})
export class Job {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({type: 'varchar'})
    readonly name: string

    @Column({type:'varchar'})
    readonly shortName: string

    @ManyToOne(() => Role, role => role.jobs, { onDelete: 'CASCADE' })
    readonly role: Role
}
