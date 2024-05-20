import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  CheckHeathly(): string {
    return 'Hello World!';
  }
}
