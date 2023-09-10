import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  id: number;

  @MinLength(3)
  name: string;

  @IsEnum(['stars', 'sword', 'katana'])
  weapon: 'stars' | 'sword' | 'katana';
}
