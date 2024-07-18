import { Controller, Get } from '@nestjs/common';
import { BasedService } from './based.service';

@Controller()
export class BasedController {
  constructor(private readonly basedService: BasedService) {}

  @Get()
  getHello(): string {
    return this.basedService.getHello();
  }
}
