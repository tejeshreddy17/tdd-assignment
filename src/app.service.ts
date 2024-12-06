import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async add(inputString: string): Promise<number> {
    if (inputString === '') {
      return 0;
    }

    if (inputString.includes('-')) {
      throw new BadRequestException(`Negative numbers are not allowed`);
    }

    const arrayOfCharacters = inputString.split('');

    const numbers = [];

    for (const char of arrayOfCharacters) {
      if (!isNaN(parseInt(char))) {
        numbers.push(parseInt(char));
      }
    }

    const sumOfNumbers = numbers.reduce((acc, number) => acc + number, 0);

    return sumOfNumbers;
  }
}
