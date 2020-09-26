import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Advisory } from './advisory.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventServiceService {
  constructor(
    @InjectRepository(Advisory)
    private advisoryRepository: Repository<Advisory>
  ) {}

  async loadMockAdvisories() {
    const sampleAdvisory = this.advisoryRepository.create({
      id: '1233456',
      hash: 'wlujqfjbweqfnweqfdn',
      personId: '123456',
      healtheIntentReferenceCd: 'fewrfewufernf'
    });

    await this.advisoryRepository.save(sampleAdvisory);

  }
}
