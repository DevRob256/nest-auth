import { Controller, Get } from '@nestjs/common';
import { Public } from './auth/auth.module';

@Controller()
export class AppController {
  @Public()
  @Get('hey')
  findAll() {
    return ['hello'];
  }
}
