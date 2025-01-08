import { Container, Filters, Title, TopBar } from '@/components/shared';

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
          <div className="border w-[250px]">
            <Filters />
          </div>
          {/* right side */}
          <div className="border flex-1">Pizzas</div>
        </div>
      </Container>
    </>
  );
}
