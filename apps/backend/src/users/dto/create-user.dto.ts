import {
  IsString,
  IsEmail,
  Length,
  Matches,
  IsOptional,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    description: 'The name of the user',
    example: 'John Doe',
  })
  name?: string;

  @IsEmail({}, { message: 'Please use a valid email address' })
  @Transform(({ value }) => value.toLowerCase())
  @ApiProperty({
    description: 'The email address of the user',
    example: 'john.doe@example.com',
  })
  email: string;

  @IsString({ message: 'Username is required' })
  @Length(3, 20, {
    message:
      'Username must be at least 3 characters long and cannot exceed 20 characters',
  })
  @Matches(/^[a-zA-Z0-9._]+$/, {
    message:
      'Username can only contain letters, numbers, underscores, and periods',
  })
  @Transform(({ value }) => value.trim().toLowerCase())
  @ApiProperty({
    description:
      'The username of the user. Can contain letters, numbers, underscores, and periods.',
    example: 'john_doe',
  })
  username: string;

  @IsString({
    message: 'Password is required and must be at least 6 characters long',
  })
  @Length(6, 255, {
    message:
      'Password must be at least 6 characters long and cannot exceed 255 characters',
  })
  @ApiProperty({
    description:
      'The password of the user. Must be at least 6 characters long.',
    example: 'password123',
  })
  password: string;
}
