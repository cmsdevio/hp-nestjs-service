import { Module } from '@nestjs/common';
import { EventServiceController } from './event-service.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advisory } from './advisory.entity';
import { EventServiceService } from './event-service.service';

@Module({
  controllers: [EventServiceController],
  imports: [TypeOrmModule.forFeature([Advisory])],
  providers: [EventServiceService]
})
export class EventServiceModule {}
