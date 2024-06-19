import { Module } from '@nestjs/common';
import { JwtModule as JWT_MODULE } from '@nestjs/jwt';
import { JwtService } from './jwt.service';

@Module({
  imports: [
    JWT_MODULE.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}
