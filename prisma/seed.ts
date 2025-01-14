import { hashSync } from 'bcrypt';
import { prisma } from './prisma-client';
import { categories, ingredients } from './constants';

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'John Doe',
        email: 'hohn@example.com',
        password: hashSync('john', 10),
        verified: new Date(),
        role: 'USER',
        provider: '',
        providerId: '',
      },
      {
        fullName: 'Jane Doe',
        email: 'jane@example.com',
        password: hashSync('jane', 10),
        verified: new Date(),
        role: 'ADMIN',
        provider: '',
        providerId: '',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });
  await prisma.ingredient.createMany({
    data: ingredients,
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
