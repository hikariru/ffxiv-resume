import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Raid} from "./raid";

@Entity()
export class Volume {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({type: 'varchar'})
    readonly title: string

    @Column({type: 'varchar'})
    readonly patchNum: string

    @ManyToOne(() => Raid, raid => raid.volumes, { onDelete: 'CASCADE' })
    readonly raid: Raid
}
