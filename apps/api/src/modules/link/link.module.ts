import { Module } from '@nestjs/common';
import { DatacloudModule } from 'src/providers/prisma/datacloud.module';

import { LinkService } from './link.service';
import { LinkController } from './link.controller';
import { GuestLinkController } from './guest-link.controller';

@Module({
  imports: [DatacloudModule],
  providers: [LinkService],
  controllers: [GuestLinkController, LinkController],
})
export class LinkModule {}
