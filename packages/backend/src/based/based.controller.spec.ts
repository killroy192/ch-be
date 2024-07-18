import { Test, TestingModule } from '@nestjs/testing';
import { BasedController } from './based.controller';
import { BasedService } from './based.service';

describe('BasedController', () => {
  let basedController: BasedController;

  beforeEach(async () => {
    const based: TestingModule = await Test.createTestingModule({
      controllers: [BasedController],
      providers: [BasedService],
    }).compile();

    basedController = based.get<BasedController>(BasedController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(basedController.getHello()).toBe('Hello World!');
    });
  });
});
