import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './role';

@Entity({ name: 'jobs' })
export class Job {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ type: 'varchar' })
  readonly name: string;

  @Column({ type: 'varchar' })
  readonly shortName: string;

  @Column()
  readonly roleId: number;

  @ManyToOne(() => Role, (role) => role.jobs, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'roleId' })
  readonly role: Role;
}
