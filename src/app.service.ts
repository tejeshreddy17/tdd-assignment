import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  add(inputString: string): number {
    // emptyString

    if (inputString === '') {
      return 0;
    }
  }
}
