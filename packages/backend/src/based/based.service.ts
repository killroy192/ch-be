import { Injectable } from '@nestjs/common';

@Injectable()
export class BasedService {
  getHello(): string {
    return 'Hello World!';
  }
}
