import { Injectable } from '@nestjs/common';

const appId = Math.round(Math.random() * 9 * 100000);
console.log('appId', appId);
@Injectable()
export class AppService {
  getHello(): string {
    return `appId : ${appId} / Hello World!`;
  }
}
