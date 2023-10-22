import { IsEmail, IsNotEmpty } from 'class-validator';

export class TestDto {
  @IsNotEmpty()
  @IsEmail({})
  email: string;
}
