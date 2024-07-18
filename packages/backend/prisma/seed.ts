import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const student1 = await prisma.student.create({
    data: {
      name: 'Tom',
      second_name: 'Jam',
      email: 'tom_jam@email.com',
      age: 30,
      grade: 4,
    },
  });

  console.log({ student1 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
