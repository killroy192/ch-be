import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student, NewStudent, UpdateStudent } from 'src/graphql.schema';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('Student')
export class StudentResolvers {
  constructor(private readonly studentService: StudentService) {}

  @Query('posts')
  async posts(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Query('post')
  async post(@Args('id') args: string): Promise<Student> {
    return this.studentService.findOne(args);
  }

  @Mutation('createStudent')
  async create(@Args('input') args: NewStudent): Promise<Student> {
    const createdStudent = await this.studentService.create(args);
    pubSub.publish('postCreated', { postCreated: createdStudent });
    return createdStudent;
  }

  @Mutation('updateStudent')
  async update(@Args('input') args: UpdateStudent): Promise<Student> {
    return this.studentService.update(args);
  }

  @Mutation('deleteStudent')
  async delete(@Args('id') args: string): Promise<Student> {
    return this.studentService.delete(args);
  }

  @Subscription('postCreated')
  postCreated() {
    return pubSub.asyncIterator('postCreated');
  }
}
