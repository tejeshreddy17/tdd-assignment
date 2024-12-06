import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async add(@Body() dto: { inputString: string }): Promise<number> {
    if (!dto.inputString) {
      throw new BadRequestException(`Required details are not present in body`);
    }

    return await this.appService.add(dto.inputString);
  }
}
