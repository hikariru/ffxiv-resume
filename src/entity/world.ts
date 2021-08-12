import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Datacenter} from "./datacenter";

@Entity()
export class World {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    readonly name: string

    @ManyToOne(() => Datacenter, datacenter => datacenter.worlds, { onDelete: 'CASCADE' })
    readonly datacenter: Datacenter
}
