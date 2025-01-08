import { IsNumber, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;
}

export class GetCatDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;
}
