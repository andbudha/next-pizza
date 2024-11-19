import {
  Container,
  Filters,
  ProductsGroupList,
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
          <div className=" flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={'Pizzas'}
                items={[
                  {
                    id: 1,
                    name: 'Polo',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D5EF5CC13A490103B92A7737459.avif',

                    items: [{ price: 12 }],
                  },
                  {
                    id: 2,
                    name: 'Polo',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D5EF5CC13A490103B92A7737459.avif',

                    items: [{ price: 12 }],
                  },
                  {
                    id: 3,
                    name: 'Polo',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D5EF5CC13A490103B92A7737459.avif',

                    items: [{ price: 12 }],
                  },
                  {
                    id: 4,
                    name: 'Polo',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D5EF5CC13A490103B92A7737459.avif',

                    items: [{ price: 12 }],
                  },
                  {
                    id: 5,
                    name: 'Polo',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D5EF5CC13A490103B92A7737459.avif',

                    items: [{ price: 12 }],
                  },
                  {
                    id: 6,
                    name: 'Polo',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D5EF5CC13A490103B92A7737459.avif',

                    items: [{ price: 12 }],
                  },
                  {
                    id: 7,
                    name: 'Polo',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D5EF5CC13A490103B92A7737459.avif',

                    items: [{ price: 12 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title={'Breakfast'}
                items={[
                  {
                    id: 1,
                    name: 'Cheese Pancakes',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D5F2B482C6C8F3E34B4ECB4CD51.avif',

                    items: [{ price: 8 }],
                  },
                  {
                    id: 2,
                    name: 'Cheese Pancakes',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D5F2B482C6C8F3E34B4ECB4CD51.avif',

                    items: [{ price: 8 }],
                  },
                  {
                    id: 3,
                    name: 'Cheese Pancakes',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11EE7D5F2B482C6C8F3E34B4ECB4CD51.avif',

                    items: [{ price: 8 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
