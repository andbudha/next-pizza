import {
  Categories,
  Container,
  Filters,
  SortPopup,
  Title,
  TopBar,
} from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-8">
        <Title text="All Pizzas" size="md" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="border flex-1">
            <div className="flex flex-col gap-16">Products</div>
          </div>
        </div>
      </Container>
    </>
  );
}
