import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Resume {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('text')
    description: string;
}
