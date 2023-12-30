import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('link')
export class LinkController {
  @Post()
  async createLink() {
    return 'links';
  }

  @Get()
  async getAllLinks() {
    return 'links';
  }

  @Get(':id')
  async getLink() {
    return 'links';
  }

  @Patch()
  async updateLink() {
    return 'links';
  }

  @Delete()
  async deleteLink() {
    return 'links';
  }

  // POST Transfer
}
