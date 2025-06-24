import { IsString, IsOptional, IsInt, IsNumber } from 'class-validator';

export class CreatePetDto {
  @IsString()
  name: string;

  @IsString()
  species: string;

  @IsOptional()
  @IsString()
  breed?: string;

  @IsOptional()
  @IsInt()
  age?: number;

  @IsOptional()
  @IsNumber()
  weight?: number;

  @IsInt()
  clientId: number;
}
