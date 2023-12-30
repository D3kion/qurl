import { Controller, Post } from '@nestjs/common';

@Controller('link')
export class GuestLinkController {
  @Post('short')
  async guestShort() {
    return 'privatetest';
  }
}
