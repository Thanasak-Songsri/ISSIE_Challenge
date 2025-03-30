import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRiderDto {
  @ApiProperty({
    description: 'The first name of the rider',
    example: 'John',
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'The last name of the rider',
    example: 'Doe', 
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'The email address of the rider',
    example: 'john.doe@example.com', 
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The license plate of the rider',
    example: 'XYZ-1234', 
  })
  @IsString()
  licensePlate: string;

  @ApiProperty({
    description: 'The phone number of the rider',
    example: '0885521313', 
  })
  @IsString()
  phoneNumber: string;
}
