import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  console.log('SEARCH REQUEST:::', request.nextUrl.searchParams.get('query'));
  const query = request.nextUrl.searchParams.get('query') || '';
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query,
        mode: 'insensitive',
      },
    },
    take: 5,
  });
  return NextResponse.json(products);
}
