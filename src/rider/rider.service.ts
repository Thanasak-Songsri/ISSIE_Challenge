import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateRiderDto } from './dto/create-rider.dto';
import { UpdateRiderDto } from './dto/update-rider.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RiderService {
  constructor(private prisma: PrismaService) {}  

  create(createRiderDto: CreateRiderDto) {
    const newRider = this.prisma.rider.create({
      data: {
        firstName: createRiderDto.firstName,
        lastName: createRiderDto.lastName,
        email: createRiderDto.email,
        licensePlate: createRiderDto.licensePlate,
        phoneNumber: createRiderDto.phoneNumber,
      },
    });
    
    return newRider;
  }


  findAll() {
    return this.prisma.rider.findMany();
  }

  findOne(id: number) {
  const rider = this.prisma.rider.findUnique({
    where: { id: id },
    select: {
      firstName: true,
      lastName: true,
      email: true,
      licensePlate: true,
      phoneNumber: true,
    },
  });

  if (!rider) {
    throw new Error(`Rider with id ${id} not found`);
  }

    return rider;
  }

  update(id: number, updateRiderDto: UpdateRiderDto) {
    return `This action updates a #${id} rider`;
  }

  remove(id: number) {
    return `This action removes a #${id} rider`;
  }
}
