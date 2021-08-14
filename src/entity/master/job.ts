import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Role } from './role'

@Entity({ name: 'jobs' })
export class Job {
  @PrimaryGeneratedColumn()
  readonly id: number

  @Column({ type: 'varchar', length: 255 })
  readonly name: string

  @Column({ type: 'varchar', length: 255 })
  readonly shortName: string

  @ManyToOne(() => Role, (role) => role.jobs, { onDelete: 'CASCADE' })
  readonly role: Role
}
