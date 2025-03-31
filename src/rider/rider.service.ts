import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateRiderDto } from './dto/create-rider.dto';
import { UpdateRiderDto } from './dto/update-rider.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';

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
    const updatedRider = this.prisma.rider.update({
      where: { id: id },
      data: {
        firstName: updateRiderDto.firstName, 
        lastName: updateRiderDto.lastName,   
        email: updateRiderDto.email,         
        licensePlate: updateRiderDto.licensePlate,
        phoneNumber: updateRiderDto.phoneNumber,
      },
    });

    if (!updatedRider) {
      throw new Error(`Error update data rider ${id}`);
    }
  
    return updatedRider; 
  }

  remove(id: number) {
  const deletedRider = this.prisma.rider.delete({
    where: { id: id },
  });

  if (!deletedRider) {
    throw new Error(`Error deleted rider ${id}`);
  }

  return deletedRider;
  }

  findRiderLocation(riderId: number) {
    return this.prisma.location.findMany({
      where: {
        riderId, 
      },
    });
  }

  CreateRiderLocation(riderId: number, createLocationDto: CreateLocationDto){
    return this.prisma.location.create({
      data: {
        riderId,       
        latitude:createLocationDto.latitude,    
        longitude:createLocationDto.longitude,
      },
    });
  }

  haversine(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; 
    const dLat = this.degreesToRadians(lat2 - lat1);
    const dLon = this.degreesToRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.degreesToRadians(lat1)) * Math.cos(this.degreesToRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; 
    return distance;
  }


  degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  
  async findRidersWithinRadius(latitude: number, longitude: number) {
  
    const ridersWithLocations = await this.prisma.rider.findMany({
      include: {
        locations: {
          select: {
            latitude: true,  
            longitude: true, 
          },
        },
      },
    });

    const nearbyRiders = ridersWithLocations.filter((rider) => {
      return rider.locations.some((location) => {
        const distance = this.haversine(latitude, longitude, location.latitude, location.longitude);
        return distance <= 5; 
      });
    });

    return nearbyRiders;
    
  }

}
