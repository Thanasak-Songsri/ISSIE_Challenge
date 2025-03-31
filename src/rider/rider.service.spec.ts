import { Test, TestingModule } from '@nestjs/testing';
import { RiderService } from './rider.service';
import { PrismaService } from '../prisma/prisma.service'; 

describe('RiderService', () => {
  let riderService: RiderService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RiderService,
        PrismaService, 
      ],
    }).compile();

    riderService = module.get<RiderService>(RiderService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(riderService).toBeDefined();
  });


});
