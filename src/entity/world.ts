import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Datacenter} from "./datacenter";

@Entity()
export class World {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @ManyToOne(() => Datacenter, datacenter => datacenter.worlds, { onDelete: 'CASCADE' })
    datacenter: Datacenter
}
