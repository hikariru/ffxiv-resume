import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {World} from "./world";

@Entity()
export class Datacenter {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    name: string

    @OneToMany(()=> World, world => world.datacenter)
    worlds: World[];
}
