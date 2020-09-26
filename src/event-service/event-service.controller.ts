import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventServiceService } from './event-service.service';

@Controller('events')
export class EventServiceController {
  constructor(private eventService: EventServiceService) {}

  @Post('/healtheintent')
  receiveHealtheintentEvent(@Body() body: any) {
    console.log(body);
  }

  @Get('/load')
  async loadMockAdvisories() {
    const response = await this.eventService.loadMockAdvisories();
    console.log(response);
  }
}
