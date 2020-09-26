import { Module } from '@nestjs/common';
import { HarryPotterService } from './harry-potter.service';

@Module({
  providers: [HarryPotterService]
})
export class HarryPotterModule {}
