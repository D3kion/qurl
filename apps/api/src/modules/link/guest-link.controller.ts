import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Link } from 'src/domain/link.model';

import { LinkService } from './link.service';

@Controller('links')
export class GuestLinkController {
  constructor(private links: LinkService) {}

  @Post()
  async createGuestLink(@Body('url') url: string): Promise<Link> {
    return this.links.createGuestLink(url);
  }

  @Get()
  async getGuestLinks(@Query('ids') ids: string) {
    return this.links.getGuestLinks(ids?.split(',') ?? []);
  }
}
