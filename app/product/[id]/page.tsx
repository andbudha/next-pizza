import {
  Container,
  GroupVariants,
  ProductImage,
  Title,
} from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
  });

  console.log('PRODUCT:::', product);

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex jflex-1">
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-between items-center w-[350px] h-[350px]">
          <ProductImage
            imageUrl={product.imageUrl}
            size={28}
            className="flex justify-center items-center "
          />
        </div>
        <div className="w-[300px] h-[300px] bg-[#FCFCFC] p-7">
          <Title
            text={product.name}
            size="md"
            className="mb-1 font-extrabold"
          />
          <GroupVariants
            items={[
              { name: 'Small', value: '28' },
              { name: 'Big', value: '33' },
            ]}
            selectedValue={'28'}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
