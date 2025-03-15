import { IsNumber, IsOptional } from 'class-validator';

export class UpdateLocationDto {
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  longitude?: number;
}