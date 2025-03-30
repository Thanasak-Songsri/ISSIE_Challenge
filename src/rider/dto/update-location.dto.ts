import { IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLocationDto {
  @ApiProperty({
    description: 'The latitude of the location (optional)',
    example: 13.7367, 
    required: false,  
  })
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiProperty({
    description: 'The longitude of the location (optional)',
    example: 100.5231, 
    required: false,  
  })
  @IsOptional()
  @IsNumber()
  longitude?: number;
}
