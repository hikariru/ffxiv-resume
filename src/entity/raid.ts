import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Volume} from "./volume";

@Entity()
export class Raid {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    title: string

    @OneToMany(()=> Volume, volume => volume.raid)
    volumes: Volume[];
}
