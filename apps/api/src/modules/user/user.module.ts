import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatacloudModule } from 'src/providers/prisma/datacloud.module';

@Module({
  imports: [DatacloudModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
