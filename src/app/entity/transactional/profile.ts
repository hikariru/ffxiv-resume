import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Player } from './player'
import { Job } from '../master/job'

@Entity({ name: 'profiles' })
export class Profile {
  @PrimaryColumn({ type: 'int' })
  playerId: number

  @OneToOne(() => Player, (player) => player.profile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'playerId' })
  readonly player: Player

  @Column()
  mainJobId: number

  @ManyToOne(() => Job)
  @JoinColumn({ name: 'mainJobId' })
  readonly mainJob: Job

  @Column({ type: 'varchar', length: 255, nullable: true })
  activeTime?: string

  @Column({ type: 'boolean' })
  canVoiceChat: boolean

  @Column({ type: 'varchar', nullable: true })
  description?: string

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  readonly updatedAt?: Date

  constructor(playerId: number, mainJobId: number, canVoiceChat: boolean, activeTime?: string, description?: string) {
    this.playerId = playerId
    this.mainJobId = mainJobId
    this.canVoiceChat = canVoiceChat
    this.activeTime = activeTime
    this.description = description
  }
}
