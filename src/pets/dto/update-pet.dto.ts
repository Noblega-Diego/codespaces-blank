import { IsString, IsOptional, IsInt, IsNumber } from 'class-validator';

export class UpdatePetDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  species?: string;

  @IsOptional()
  @IsString()
  breed?: string;

  @IsOptional()
  @IsInt()
  age?: number;

  @IsOptional()
  @IsNumber()
  weight?: number;

  @IsOptional()
  @IsInt()
  clientId?: number;
}
