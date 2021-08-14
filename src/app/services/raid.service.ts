import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Role } from '../entity/master/role'
import { Raid } from '../entity/master/raid'

@Injectable()
export class RaidService {
  constructor(
    @InjectRepository(Raid)
    private readonly raidRepository: Repository<Raid>,
  ) {}

  async findAll(): Promise<Raid[]> {
    return await this.raidRepository.find()
  }
}
