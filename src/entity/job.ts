import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Role} from "./role";

@Entity()
export class Job {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    name: string

    @Column({type:'varchar'})
    shortName: string

    @ManyToOne(() => Role, role => role.jobs, { onDelete: 'CASCADE' })
    role: Role
}
