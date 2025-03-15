import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RiderController } from './rider/rider.controller';
import { RiderModule } from './rider/rider.module';

@Module({
  imports: [RiderModule],
  controllers: [AppController, RiderController],
  providers: [AppService],
})
export class AppModule {}
