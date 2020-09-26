import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HarryPotterModule } from './harry-potter/harry-potter.module';
import { EventServiceModule } from './event-service/event-service.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advisory } from './event-service/advisory.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'gQ2z9ofwTWPal8D',
      database: 'DFD',
      entities: [Advisory],
      synchronize: false,
      charset: 'utf8_general_ci'
    }),
    HarryPotterModule,
    EventServiceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
