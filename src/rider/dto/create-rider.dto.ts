import { IsString, IsEmail } from 'class-validator';

export class CreateRiderDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  licensePlate: string;

  @IsString()
  phoneNumber: string;
}

