import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {World} from "./world";

@Entity()
export class Datacenter {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({type: 'varchar'})
    readonly name: string

    @OneToMany(()=> World, world => world.datacenter)
    readonly worlds: World[];
}
