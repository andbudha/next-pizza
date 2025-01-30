import {
  Container,
  Filters,
  ProductCard,
  ProductGroupList,
  Title,
  TopBar,
} from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });

  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          {/* left side */}
          <div className=" w-[250px]">
            <Filters />
          </div>
          {/* right side */}
          <div className=" flex-1">
            {categories.length > 0 &&
              categories.map((category) => (
                <ProductGroupList
                  key={category.id}
                  title={category.name}
                  products={category.products}
                  categoryId={category.id}
                />
              ))}
          </div>
        </div>
      </Container>
    </>
  );
}
