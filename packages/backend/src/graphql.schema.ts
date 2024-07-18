/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewStudent {
  name: string;
  second_name: string;
  email: string;
  age: number;
  grade: number;
}

export class UpdateStudent {
  id: string;
  name: string;
  second_name: string;
  email: string;
  age: number;
  grade: number;
}

export class Student {
  id: string;
  name: string;
  second_name: string;
  email: string;
  age: number;
  grade: number;
}

export abstract class IQuery {
  abstract students(): Student[] | Promise<Student[]>;

  abstract student(id: string): Nullable<Student> | Promise<Nullable<Student>>;
}

export abstract class IMutation {
  abstract createStudent(input: NewStudent): Student | Promise<Student>;

  abstract updateStudent(
    input: UpdateStudent,
  ): Nullable<Student> | Promise<Nullable<Student>>;

  abstract deleteStudent(
    id: string,
  ): Nullable<Student> | Promise<Nullable<Student>>;
}

export abstract class ISubscription {
  abstract studentCreated(): Nullable<Student> | Promise<Nullable<Student>>;
}

type Nullable<T> = T | null;
