import { Injectable } from '@nestjs/common';
import { Student } from '@prisma/client';
import { NewStudent, UpdateStudent } from 'src/graphql.schema';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<Student | null> {
    return this.prisma.student.findUnique({
      where: {
        id,
      },
    });
  }

  async findAll(): Promise<Student[]> {
    return this.prisma.student.findMany({});
  }

  async create(input: NewStudent): Promise<Student> {
    return this.prisma.student.create({
      data: input,
    });
  }

  async update(params: UpdateStudent): Promise<Student> {
    const { id, ...params_without_id } = params;

    return this.prisma.student.update({
      where: {
        id,
      },
      data: {
        ...params_without_id,
      },
    });
  }

  async delete(id: string): Promise<Student> {
    return this.prisma.student.delete({
      where: {
        id,
      },
    });
  }
}
