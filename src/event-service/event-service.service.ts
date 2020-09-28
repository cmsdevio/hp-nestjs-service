import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Advisory } from './advisory.entity';
import { Repository } from 'typeorm';
import { MockAdvisoriesConfigDto } from './dtos/mock-advisories-config.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class EventServiceService {
  constructor(
    @InjectRepository(Advisory)
    private advisoryRepository: Repository<Advisory>
  ) {}

  async loadMockAdvisories(mockAdvisoriesConfigDto: MockAdvisoriesConfigDto) {
    const { count } = mockAdvisoriesConfigDto;
    const listMockAdvisories: Advisory[] = [];

    for (let i=0; i<count; i++) {
      const newAdvisory = new Advisory();
      newAdvisory.id = uuidv4();
      newAdvisory.hash = uuidv4();
      newAdvisory.personId = (Math.random() * (99999999 - 1) + 1).toString();
      newAdvisory.healtheIntentReferenceCd = EventServiceService.generateString(70);
      newAdvisory.healtheIntentReferenceDisplayText = EventServiceService.generateString(70);
      listMockAdvisories.push(this.advisoryRepository.create(newAdvisory));
    }

    return await this.advisoryRepository.save(listMockAdvisories);

  }

  static generateString(length: number): string {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
