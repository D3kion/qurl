import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DBClient } from '@qurl/datacloud';
import { DatabaseConfig } from 'src/config/configuration';

@Injectable()
export class DatacloudService extends DBClient implements OnModuleInit {
  constructor(private config: ConfigService) {
    const databaseUrl = config.get<DatabaseConfig>('database').url;
    super({ datasourceUrl: databaseUrl });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
