import { IsString, IsEmail, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRiderDto {
  @ApiProperty({
    description: 'The first name of the rider (optional)',
    example: 'John', 
    required: false,  
  })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiProperty({
    description: 'The last name of the rider (optional)',
    example: 'Doe', 
    required: false,  
  })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiProperty({
    description: 'The email address of the rider (optional)',
    example: 'john.doe@example.com', 
    required: false,  
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({
    description: 'The license plate of the rider (optional)',
    example: 'XYZ-1234', 
    required: false,  
  })
  @IsOptional()
  @IsString()
  licensePlate?: string;

  @ApiProperty({
    description: 'The phone number of the rider (optional)',
    example: '+1234567890', 
    required: false,  
  })
  @IsOptional()
  @IsString()
  phoneNumber?: string;
}
