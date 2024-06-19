import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['password']),
) {
  @ApiPropertyOptional({
    description: 'The name of the user',
    example: 'John Doe',
  })
  name?: string;

  @ApiPropertyOptional({
    description: 'The email address of the user',
    example: 'john.doe@example.com',
  })
  email?: string;

  @ApiPropertyOptional({
    description:
      'The username of the user. Can contain letters, numbers, underscores, and periods.',
    example: 'john_doe',
  })
  username?: string;
}
