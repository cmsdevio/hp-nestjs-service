import { Body, Controller, Post } from '@nestjs/common';
import { EventServiceService } from './event-service.service';
import { MockAdvisoriesConfigDto } from './dtos/mock-advisories-config.dto';

@Controller('events')
export class EventServiceController {
  constructor(private eventService: EventServiceService) {}

  @Post('/healtheintent')
  receiveHealtheintentEvent(@Body() body: any) {
    console.log(body);
  }

  @Post('/load')
  async loadMockAdvisories(@Body() mockAdvisoriesConfigDto: MockAdvisoriesConfigDto) {
    const response = await this.eventService.loadMockAdvisories(mockAdvisoriesConfigDto);
    console.log(response);
  }
}
