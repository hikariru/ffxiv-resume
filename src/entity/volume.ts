import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Raid} from "./raid";

@Entity()
export class Volume {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    title: string

    @ManyToOne(() => Raid, raid => raid.volumes, { onDelete: 'CASCADE' })
    raid: Raid
}
