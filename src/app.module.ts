import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HarryPotterModule } from './harry-potter/harry-potter.module';

@Module({
  imports: [HarryPotterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
