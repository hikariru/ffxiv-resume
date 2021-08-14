import { Injectable } from '@nestjs/common'
import { World } from '../entity/master/world'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class WorldService {
  constructor(
    @InjectRepository(World)
    private readonly worldRepository: Repository<World>,
  ) {}

  async findAllWorlds(): Promise<World[]> {
    return await this.worldRepository.find()
  }
}
