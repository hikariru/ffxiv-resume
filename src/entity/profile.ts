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
import { Job } from './master/job'

@Entity({ name: 'profiles' })
export class Profile {
  @PrimaryColumn('int', { name: 'playerId' })
  @OneToOne(() => Player, (player) => player.profile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'playerId', referencedColumnName: 'id' })
  player: Player

  @ManyToOne(() => Job)
  @JoinColumn({ name: 'mainJobId' })
  mainJob: Job

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

  constructor(canVoiceChat: boolean, activeTime?: string, description?: string) {
    this.canVoiceChat = canVoiceChat
    this.activeTime = activeTime
    this.description = description
  }
}
