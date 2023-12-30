import { Module } from '@nestjs/common';
import { LinkService } from './link.service';
import { LinkController } from './link.controller';
import { GuestLinkController } from './guest-link.controller';

@Module({
  providers: [LinkService],
  controllers: [GuestLinkController, LinkController],
})
export class LinkModule {}
