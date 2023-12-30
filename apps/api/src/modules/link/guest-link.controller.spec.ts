import { Test, TestingModule } from '@nestjs/testing';
import { GuestLinkController } from './guest-link.controller';

describe('GuestLinkController', () => {
  let controller: GuestLinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuestLinkController],
    }).compile();

    controller = module.get<GuestLinkController>(GuestLinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
