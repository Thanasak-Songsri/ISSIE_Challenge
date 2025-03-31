import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLocationDto {
  @IsNumber()
  latitude: number;

  @ApiProperty({
    description: 'The longitude of the location',
    example: 100.5231, 
  })
  @IsNumber()
  longitude: number;

  @ApiProperty({
    description: 'The rider ID associated with the location',
    example: 123, 
  })
  @IsNumber()
  riderId: number;
}