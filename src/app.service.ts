import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'coe vini nunca te pedi nada, me da um 10 ai';
  }
}
