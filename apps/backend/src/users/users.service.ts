import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResult } from 'mongodb';
import { HttpError } from 'http/error';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    let createdUser = new this.userModel(createUserDto);
    createdUser = await createdUser.save();
    if (!createdUser)
      throw new HttpError(
        'Signup Failed',
        'User not created',
        HttpStatus.BAD_REQUEST,
      );
    return createdUser;
  }

  async findAll(): Promise<User[]> {
    try {
      return await this.userModel.find();
    } catch (error) {
      throw new HttpError('Not Found', error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<User> {
    try {
      const user = await this.userModel.findById(id);
      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return user;
    } catch (error) {
      throw new HttpError('Not Found', error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      const updatedUser = await this.userModel
        .findByIdAndUpdate({ _id: id }, { $set: updateUserDto }, { new: true })
        .exec();

      if (!updatedUser) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }

      return updatedUser;
    } catch (error) {
      throw new HttpError(
        'Something went Wrong',
        error.message,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(id: string): Promise<DeleteResult> {
    try {
      const result = await this.userModel.deleteOne({ _id: id }).exec();
      if (result.deletedCount === 0) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return result;
    } catch (error) {
      throw new HttpError(
        'Something went Wrong',
        error.message,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
