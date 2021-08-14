import { Injectable } from '@nestjs/common'
import { Job } from '../entity/master/job'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
  ) {}

  async findAll(): Promise<Job[]> {
    return await this.jobRepository.find()
  }
}
