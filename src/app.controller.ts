import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TestDto } from "./dto/test.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('test')
  test(@Body() data: TestDto) {
    return data;
  }
}
