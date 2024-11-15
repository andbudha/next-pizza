import {
  Categories,
  Container,
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
    </>
  );
}
