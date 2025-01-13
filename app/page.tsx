import {
  Container,
  Filters,
  ProductCard,
  ProductGroupList,
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
        <div className="flex gap-[80px]">
          {/* left side */}
          <div className=" w-[250px]">
            <Filters />
          </div>
          {/* right side */}
          <div className=" flex-1">
            <ProductGroupList
              title="Pizzas"
              items={[
                {
                  id: 1,
                  name: 'Margherita',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ee7d5ec7f77a5b992e9da2e434e478.avif',
                  price: 8,
                  ingredients: 'Tomato, Mozzarella, Basil',
                },
                {
                  id: 2,
                  name: 'Pepperoni',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ee7d5ec7f77a5b992e9da2e434e478.avif',
                  price: 9,
                  ingredients: 'Tomato, Mozzarella, Pepperoni',
                },
                {
                  id: 3,
                  name: 'BBQ Chicken',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ee7d5ec7f77a5b992e9da2e434e478.avif',
                  price: 10,
                  ingredients: 'Tomato, Mozzarella, Chicken, BBQ Sauce',
                },
                {
                  id: 4,
                  name: 'Hawaiian',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ee7d5ec7f77a5b992e9da2e434e478.avif',
                  price: 11,
                  ingredients: 'Tomato, Mozzarella, Hawaiian Sauce, Ham',
                },
                {
                  id: 5,
                  name: 'Veggie',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ee7d5ec7f77a5b992e9da2e434e478.avif',
                  price: 12,
                  ingredients: 'Tomato, Mozzarella, Mushrooms, Onions, Olives',
                },
                {
                  id: 6,
                  name: 'Meat Lovers',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ee7d5ec7f77a5b992e9da2e434e478.avif',
                  price: 13,
                  ingredients: 'Tomato, Mozzarella, Pepperoni, Ham, Bacon',
                },
                {
                  id: 7,
                  name: 'Four Cheese',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ee7d5ec7f77a5b992e9da2e434e478.avif',
                  price: 14,
                  ingredients: 'Tomato, Mozzarella, Cheddar, Parmesan',
                },
                {
                  id: 8,
                  name: 'Supreme',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ee7d5ec7f77a5b992e9da2e434e478.avif',
                  price: 15,
                  ingredients:
                    'Tomato, Mozzarella, Pepperoni, Mushrooms, Onions, Olives',
                },
              ]}
              categoryId={1}
            />
            <ProductGroupList
              title="Breakfast"
              items={[
                {
                  id: 1,
                  name: 'Bacon and Cheddar Omelette',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:233x233/0193bb3fdb8b70bb82bd1eb2d01bac5f.avif',
                  price: 8,
                  ingredients: 'Bacon, Cheddar, Eggs',
                },
                {
                  id: 2,
                  name: 'Mushroom and Swiss Omelette',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:233x233/0193bb3fdb8b70bb82bd1eb2d01bac5f.avif',
                  price: 9,
                  ingredients: 'Mushrooms, Swiss, Eggs',
                },
                {
                  id: 3,
                  name: 'Spinach and Feta Omelette',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:233x233/0193bb3fdb8b70bb82bd1eb2d01bac5f.avif',
                  price: 10,
                  ingredients: 'Spinach, Feta, Eggs',
                },
                {
                  id: 4,
                  name: 'Caprese Omelette',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:233x233/0193bb3fdb8b70bb82bd1eb2d01bac5f.avif',
                  price: 11,
                  ingredients: 'Tomatoes, Mozzarella, Basil, Eggs',
                },
                {
                  id: 5,
                  name: 'Prosciutto and Arugula Omelette',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:233x233/0193bb3fdb8b70bb82bd1eb2d01bac5f.avif',
                  price: 12,
                  ingredients: 'Prosciutto, Arugula, Eggs',
                },
                {
                  id: 6,
                  name: 'Smoked Salmon and Cream Cheese Omelette',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:233x233/0193bb3fdb8b70bb82bd1eb2d01bac5f.avif',
                  price: 13,
                  ingredients: 'Smoked Salmon, Cream Cheese, Eggs',
                },
              ]}
              categoryId={2}
            />
            <ProductGroupList
              title="Coffee"
              items={[
                {
                  id: 1,
                  name: 'Americano',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:233x233/11ee7d5f243edf28a95820f2a40aacc4.avif',
                  price: 2.5,
                  ingredients: 'Espresso with hot water',
                },
                {
                  id: 2,
                  name: 'Latte',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:233x233/11ee7d5f24b752499d31c5bdfdd3f674.avif',
                  price: 3,
                  ingredients: 'Espresso with steamed milk',
                },
                {
                  id: 3,
                  name: 'Cappuccino',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:233x233/11ee7d5f22cf7f75aa4cd07e88c36e0c.avif',
                  price: 3.5,
                  ingredients: 'Espresso with steamed milk foam',
                },
              ]}
              categoryId={3}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
