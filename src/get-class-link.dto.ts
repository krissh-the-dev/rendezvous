import { IsEnum, IsNotEmpty } from 'class-validator';
import { ClassIds } from './app.repository';

export class GetClassLinkDto {
  @IsNotEmpty()
  @IsEnum(ClassIds, {
    message:
      'Class not found, Add you class by opening a PR: https://github.com/KrishnaMoorthy12/rendezvous',
  })
  classId: string;
}
