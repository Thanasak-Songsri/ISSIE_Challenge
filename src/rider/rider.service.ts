import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateRiderDto } from './dto/create-rider.dto';
import { UpdateRiderDto } from './dto/update-rider.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class RiderService extends PrismaClient implements OnModuleInit {

  onModuleInit() {
    this.$connect();
    console.log('Database connected')
  }
  

  create(createRiderDto: CreateRiderDto) {
    return 'This action adds a new rider';
  }

  findAll() {
    return `This action returns all rider`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rider`;
  }

  update(id: number, updateRiderDto: UpdateRiderDto) {
    return `This action updates a #${id} rider`;
  }

  remove(id: number) {
    return `This action removes a #${id} rider`;
  }
}
