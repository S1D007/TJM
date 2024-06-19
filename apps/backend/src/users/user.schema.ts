import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = User & Document;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class User extends Document {
  @Prop({
    isRequired: false,
    trim: true,
  })
  name: string;

  @Prop({
    lowercase: true,
    unique: true,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
  })
  email: string;

  @Prop({
    lowercase: true,
    required: [true, 'Username is required'],
    unique: true,
    minlength: [3, 'Username must be at least 3 characters long'],
    maxlength: [20, 'Username cannot exceed 20 characters'],
    trim: true,
  })
  username: string;

  @Prop({
    select: false,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long'],
    set: (value: string) => bcrypt.hashSync(value, 10),
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index({ email: 1 });
UserSchema.index({ username: 1 });
