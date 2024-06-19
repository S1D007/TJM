import { PickType } from '@nestjs/mapped-types';
import { SignupDTO } from './signup.dto';

export class LoginDTO extends PickType(SignupDTO, ['username', 'password']) {}
