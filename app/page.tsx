import {
  Container,
  Filters,
  ProductCard,
  Title,
  TopBar,
} from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* left side */}
          <div className=" w-[250px]">
            <Filters />
          </div>
          {/* right side */}
          <div className=" flex-1">
            <ProductCard id={0} price={0} imageUrl={''} name={''} />
          </div>
        </div>
      </Container>
    </>
  );
}
