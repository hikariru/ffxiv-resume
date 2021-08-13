import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Volume } from './volume';

@Entity({ name: 'raids' })
export class Raid {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ type: 'varchar' })
  readonly title: string;

  @OneToMany(() => Volume, (volume) => volume.raid)
  readonly volumes: Volume[];
}
