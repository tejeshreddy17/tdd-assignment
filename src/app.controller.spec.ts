import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('AppService', () => {
  let appservice: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appservice = app.get<AppService>(AppService);
  });

  it('should return a zero for empty string', async () => {
    const inputString = '';

    expect(await appservice.add(inputString)).toEqual(expect.any(Number));
  });

  it('should return a 6', async () => {
    const inputString = '1\n2,3';

    expect(await appservice.add(inputString)).toEqual(expect.any(Number));
  });

  it('should return a error', async () => {
    const inputString = '-1,-2,-3';

    expect(async () => {
      await appservice.add(inputString);
    }).rejects.toThrow(
      new BadRequestException('Negative numbers are not allowed'),
    );
  });
});
