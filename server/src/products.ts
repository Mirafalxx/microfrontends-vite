export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Пицца 4 сыра',
    price: 5.99,
    description:
      'Пицца-соус, сыры: моцарелла, эмменталь, дорблю, пармезан. 4 СЫРА',
    image: 'http://localhost:8080/pizza-1.png',
    longDescription:
      'Наивкуснейшая пицца 4 сыра приготовленная в итальянской печи по особой технологии',
  },
  {
    id: 2,
    name: 'Барбекю',
    price: 8.99,
    description: 'Сытная домашняя пицца с соусом барбекю и курицей',
    image: 'http://localhost:8080/pizza-2.png',
    longDescription:
      '.Сытная домашняя пицца с соусом барбекю, куриным филе, колбасками, грибами, томатами, с маринованным луком и огурчиками.',
  },
  {
    id: 3,
    name: 'Вегетарианская',
    price: 7.99,
    description: 'Сомнительно но ОКЭЙ',
    image: 'http://localhost:8080/pizza-3.png',
    longDescription:
      'Пицца-соус, сыр «Моцарелла», помидоры, кукуруза, маслины, шампиньоны, болгарский перец, зелень, лук',
  },
  {
    id: 5,
    name: 'Гасконская',
    price: 7.99,
    description: 'Пицца Гасконская. Пицца-соус, сыр',
    image: 'http://localhost:8080/pizza-4.png',
    longDescription:
      'Пицца Гасконская. Пицца-соус, сыр моцарелла, копчёная курица, шампиньоны, болгарский перец, помидоры, кукуруза, майонез, зелень',
  },
  {
    id: 6,
    name: 'Деревенская',
    price: 6.99,
    description: 'Пицца-соус, сыр моцарелла, маринованная говядина, копчёная',
    image: 'http://localhost:8080/pizza-5.png',
    longDescription:
      'Пицца-соус, сыр моцарелла, маринованная говядина, копчёная курица, шампиньоны, чеснок, лук, зелень.',
  },
  {
    id: 7,
    name: 'Детская',
    price: 8.99,
    description: 'Пицца Детская. Пицца-соус, сыр',
    image: 'http://localhost:8080/pizza-6.png',
    longDescription:
      'Пицца Детская. Пицца-соус, сыр моцарелла, сосиски, помидоры, кукуруза.',
  },
  {
    id: 8,
    name: 'Домашняя',
    price: 7.99,
    description:
      'Пицца-соус, сыр моцарелла, ветчина, помидоры, шампиньоны, зелень',
    image: 'http://localhost:8080/pizza-7.png',
    longDescription:
      'Пицца-соус, сыр моцарелла, ветчина, помидоры, шампиньоны, зелень мелень',
  },
  {
    id: 9,
    name: 'Обжорка ',
    price: 8.99,
    description: 'ОБЖОРКА Пицца-соус, говяжий фарш',
    image: 'http://localhost:8080/pizza-8.png',
    longDescription:
      'ОБЖОРКА Пицца-соус, говяжий фарш, сыр моцарелла, помидоры, лук, майонез, кетчуп, зелень, маринованные огурцы.',
  },
  {
    id: 10,
    name: 'Итальянка',
    price: 9.99,
    description: 'Пицца Итальянка. Пицца-соус, сыр моцарелла',
    image: 'http://localhost:8080/pizza-9.png',
    longDescription:
      'Пицца Итальянка. Пицца-соус, сыр моцарелла, говядина с грибами Вешенками в сливочном соусе, зелень.',
  },
  {
    id: 11,
    name: 'Карри',
    price: 12.99,
    description: 'Пицца-соус, сыр моцарелла, курица',
    image: 'http://localhost:8080/pizza-10.png',
    longDescription:
      'Пицца-соус, сыр моцарелла, курица карри в остром фирменном соусе, кинза.',
  },
];

export default products;
