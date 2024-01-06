import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { nanoid } from 'src/utils/nanoid';
import { AppConfig } from 'src/config/configuration';
import { Link } from 'src/domain/link.model';
import { DatacloudService } from 'src/providers/prisma/datacloud.service';

@Injectable()
export class LinkService {
  private guestDomain = this.config.get<AppConfig>('app').baseUrl;

  constructor(
    private config: ConfigService,
    private db: DatacloudService,
  ) {}

  async getGuestLinks(ids: string[]): Promise<Link[]> {
    return this.db.link.findMany({
      where: { id: { in: ids } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createGuestLink(url: string): Promise<Link> {
    const key = await this.getRandomKey(this.guestDomain);
    return this.db.link.create({
      data: { domain: this.guestDomain, key, url },
    });
  }

  async getRandomKey(domain: string): Promise<string> {
    const key = nanoid();
    const exists = await this.db.link.findUnique({
      where: { domain_key: { domain, key } },
    });
    return !exists ? key : this.getRandomKey(domain);
  }
}
