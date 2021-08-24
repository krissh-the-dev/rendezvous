import { IsEnum } from 'class-validator';
import { ClassIds } from './classes_list';

export class GetClassLinkDto {
  @IsEnum(ClassIds, {
    message:
      'Class not found, Add you class by opening a PR: https://github.com/KrishnaMoorthy12/rendezvous',
  })
  classId: ClassIds;
}
