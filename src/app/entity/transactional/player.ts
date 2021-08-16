import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { World } from '../master/world'
import { Profile } from './profile'
import { RaidProgress } from './raidProgress'

@Entity({ name: 'players' })
export class Player {
  @PrimaryGeneratedColumn()
  readonly id?: number

  @Column({ type: 'varchar', length: 255 })
  firstName: string

  @Column({ type: 'varchar', length: 255 })
  lastName: string

  @Column({ type: 'int' })
  characterId: number

  @OneToOne(() => Profile)
  profile: Profile

  @OneToMany(() => RaidProgress, (raidProgress) => raidProgress.player)
  raidProgress: RaidProgress

  @Column({ type: 'varchar', length: 255 })
  password?: string

  @Column()
  worldId: number

  @ManyToOne(() => World)
  @JoinColumn({ name: 'worldId' })
  readonly world: World

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  readonly updatedAt?: Date

  constructor(firstName: string, lastName: string, characterId: number, worldId: number) {
    this.firstName = firstName
    this.lastName = lastName
    this.characterId = characterId
    this.worldId = worldId
  }
}
