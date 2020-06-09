import { Injectable } from '@nestjs/common';

// NOTE: 로드밸렁싱 app id 확인용
const appId = Math.round(Math.random() * 9 * 100000);
console.log('appId', appId);
@Injectable()
export class AppService {
  getHello(): string {
    return `appId : ${appId} / Hello World!`;
  }
}
