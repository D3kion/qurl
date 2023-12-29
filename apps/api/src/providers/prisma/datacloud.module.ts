import { Module } from '@nestjs/common';
import { DatacloudService } from './datacloud.service';

@Module({
  providers: [DatacloudService],
  exports: [DatacloudService],
})
export class DatacloudModule {}
