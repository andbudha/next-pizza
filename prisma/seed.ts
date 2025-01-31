import { hashSync } from 'bcrypt';
import { prisma } from './prisma-client';
import { categories, ingredients, products } from './constants';

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
  await prisma.product.createMany({
    data: products,
  });

  const margherita = await prisma.product.create({
    data: {
      name: 'Margherita',
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11ee7d5ec7f77a5b992e9da2e434e478.avif',
      categoryId: 1,

      ingredients: {
        connect: ingredients.slice(0, 8),
      },
    },
  });
  const pepperoni = await prisma.product.create({
    data: {
      name: 'Pepperoni',
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11ee7d5ec7f77a5b992e9da2e434e478.avif',
      categoryId: 1,

      ingredients: {
        connect: ingredients.slice(4, 12),
      },
    },
  });

  const hawaiian = await prisma.product.create({
    data: {
      name: 'Hawaiian',
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11ee7d5ec7f77a5b992e9da2e434e478.avif',
      categoryId: 1,

      ingredients: {
        connect: ingredients.slice(6, 15),
      },
    },
  });

  const bbqChicken = await prisma.product.create({
    data: {
      name: 'BBQ Chicken',
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11ee7d5ec7f77a5b992e9da2e434e478.avif',
      categoryId: 1,

      ingredients: {
        connect: ingredients.slice(0, 8),
      },
    },
  });

  const veggie = await prisma.product.create({
    data: {
      name: 'Veggie',
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11ee7d5ec7f77a5b992e9da2e434e478.avif',
      categoryId: 1,

      ingredients: {
        connect: ingredients.slice(4, 12),
      },
    },
  });

  const fourCheese = await prisma.product.create({
    data: {
      name: 'Four Cheese',
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11ee7d5ec7f77a5b992e9da2e434e478.avif',
      categoryId: 1,

      ingredients: {
        connect: ingredients.slice(6, 15),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      {
        productId: 10,
        price: 2,
      },
      {
        productId: 11,
        price: 2,
      },
      {
        productId: 12,
        price: 2,
      },
      {
        productId: 1,
        price: 6,
      },
      {
        productId: 2,
        price: 5,
      },
      {
        productId: 3,
        price: 6,
      },
      {
        productId: 4,
        price: 5,
      },
      {
        productId: 5,
        price: 6,
      },
      {
        productId: 6,
        price: 5,
      },
      {
        productId: 7,
        price: 2,
      },
      {
        productId: 8,
        price: 3,
      },
      {
        productId: 9,
        price: 3,
      },
      {
        productId: margherita.id,
        price: 10,
        pizzaType: 1,
        size: 28,
      },
      {
        productId: margherita.id,
        price: 11,
        pizzaType: 2,
        size: 33,
      },
      {
        productId: pepperoni.id,
        price: 10,
        pizzaType: 1,
        size: 28,
      },
      {
        productId: pepperoni.id,
        price: 11,
        pizzaType: 2,
        size: 33,
      },
      {
        productId: hawaiian.id,
        price: 10,
        pizzaType: 1,
        size: 28,
      },
      {
        productId: hawaiian.id,
        price: 11,
        pizzaType: 2,
        size: 33,
      },
      {
        productId: bbqChicken.id,
        price: 10,
        pizzaType: 1,
        size: 28,
      },
      {
        productId: bbqChicken.id,
        price: 11,
        pizzaType: 2,
        size: 33,
      },
      {
        productId: veggie.id,
        price: 10,
        pizzaType: 1,
        size: 28,
      },
      {
        productId: veggie.id,
        price: 11,
        pizzaType: 2,
        size: 33,
      },
      {
        productId: fourCheese.id,
        price: 10,
        pizzaType: 1,
        size: 28,
      },
      {
        productId: fourCheese.id,
        price: 11,
        pizzaType: 2,
        size: 33,
      },
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '111',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '222',
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      cartId: 1,
      productItemId: 1,
      quantity: 2,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE;`;
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
