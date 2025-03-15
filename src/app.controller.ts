import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RiderController } from './rider/rider.controller';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly riderController: RiderController
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getAllRiders(): string {
    return "";
    // return this.riderController;
  }
}
