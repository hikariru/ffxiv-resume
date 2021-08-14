import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { World } from '../master/world'
import { Profile } from './profile'

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

  @Column({ type: 'varchar', length: 255 })
  password?: string

  @ManyToOne(() => World)
  world: World

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  readonly updatedAt?: Date

  constructor(firstName: string, lastName: string, characterId: number) {
    this.firstName = firstName
    this.lastName = lastName
    this.characterId = characterId
  }
}
