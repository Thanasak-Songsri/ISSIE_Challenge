import { Module } from '@nestjs/common';
import { RiderService } from './rider.service';
import { RiderController } from './rider.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RiderController],
  providers: [RiderService,PrismaService],
})
export class RiderModule {}
