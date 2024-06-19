import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  UsePipes,
  ValidationPipe,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.schema';
import response from 'http/responseWrapper';
import { DeleteResult } from 'mongodb';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiBody({ type: CreateUserDto })
  async create(
    @Res() res,
    @Body() createUserDto: CreateUserDto,
  ): Promise<User | void> {
    const data = await this.usersService.create(createUserDto);
    return await response<User>(
      'Signup Success',
      data,
      res,
      HttpStatus.CREATED,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users.', type: [User] })
  async findAll(@Res() res): Promise<User[] | void> {
    const data = await this.usersService.findAll();
    return response<User[]>('Success', data, res, HttpStatus.OK);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the user by ID.',
  })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @ApiParam({ name: 'id', type: String, description: 'ID of the user' })
  async findOne(@Res() res, @Param('id') id: string): Promise<User | void> {
    const data = await this.usersService.findOne(id);
    return response<User>('Success', data, res, HttpStatus.OK);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: 'Update user by ID' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @ApiBody({ type: UpdateUserDto })
  @ApiParam({ name: 'id', type: String, description: 'ID of the user' })
  async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User | void> {
    const data = await this.usersService.update(id, updateUserDto);
    return response<User>('Update Success', data, res, HttpStatus.OK);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by ID' })
  @ApiResponse({
    status: 202,
    description: 'The user has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @ApiParam({ name: 'id', type: String, description: 'ID of the user' })
  async remove(@Res() res, @Param('id') id: string) {
    const data = await this.usersService.remove(id);
    return response<DeleteResult>('Success', data, res, HttpStatus.ACCEPTED);
  }
}
