import { Injectable, NotFoundException } from '@nestjs/common';
import { ClassIds } from './app.repository';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCurrentClassMeetLink(classId: ClassIds): string {
    // if (!Object.values(ClassIds).includes(classId)) {
    //   console.log(`ClassId: ${JSON.stringify(classId)} not found`);
    //   throw new NotFoundException({
    //     statusCode: 404,
    //     message: 'Class not found',
    //     extendedMessage:
    //       'Add you class by opening a PR: https://github.com/KrishnaMoorthy12/rendezvous',
    //   });
    // }
    return classId;
  }
}
