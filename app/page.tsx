import { Categories, Container, Title } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
        <Categories />
      </Container>
    </>
  );
}
