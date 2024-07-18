import { Module } from '@nestjs/common';
import { StudentResolvers } from './student.resolvers';
import { StudentService } from './student.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [StudentResolvers, StudentService],
  imports: [PrismaModule],
})
export class StudentModule {}
