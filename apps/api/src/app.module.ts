import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LinksModule } from './links/links.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [UsersModule, LinksModule, ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
