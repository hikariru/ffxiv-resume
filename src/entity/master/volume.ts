import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Raid } from './raid'

@Entity({ name: 'volumes' })
export class Volume {
  @PrimaryGeneratedColumn()
  readonly id: number

  @Column({ type: 'varchar' })
  readonly title: string

  @Column({ type: 'varchar' })
  readonly patchNum: string

  @ManyToOne(() => Raid, (raid) => raid.volumes, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  readonly raid: Raid
}
