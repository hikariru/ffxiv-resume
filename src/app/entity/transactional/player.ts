import {
  AfterLoad,
  BeforeInsert,
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
import { IsInt, Matches } from 'class-validator'
import bcrypt from 'bcrypt'
require('dotenv').config()

@Entity({ name: 'players' })
export class Player {
  @PrimaryGeneratedColumn()
  readonly id?: number

  @Column({ type: 'varchar', length: 255 })
  @Matches("^[A-Z][a-z'-]{0,13}[a-z]$", 'i')
  firstName: string

  @Column({ type: 'varchar', length: 255 })
  @Matches("^[A-Z][a-z'-]{0,13}[a-z]$", 'i')
  lastName: string

  @Column({ type: 'int' })
  @IsInt()
  characterId: number

  @OneToOne(() => Profile)
  profile: Profile

  @OneToMany(() => RaidProgress, (raidProgress) => raidProgress.player)
  raidProgress: RaidProgress

  rawPassword: string

  @Column({ type: 'varchar', length: 255 })
  password?: string

  @Column()
  @IsInt()
  worldId: number

  @ManyToOne(() => World)
  @JoinColumn({ name: 'worldId' })
  readonly world: World

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  readonly updatedAt?: Date

  constructor(firstName: string, lastName: string, characterId: number, worldId: number, rawPassword?: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.characterId = characterId
    this.worldId = worldId
    if (rawPassword) {
      this.rawPassword = rawPassword
    }
  }

  @AfterLoad()
  private loadPassword() {
    this.rawPassword = this.password
  }

  @BeforeInsert()
  private async encryptPassword() {
    if (this.rawPassword !== this.password) {
      this.password = await bcrypt.hash(this.rawPassword, process.env.SALT)
    }
  }
}
