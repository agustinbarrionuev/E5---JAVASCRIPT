const products = [
  // PIZZAS
  {
    id: 1,
    name: "La Mr. Pit",
    desc: "Solo para expertos",
    price: 350,
    category: "pizzas",
    img: "images/popular/La Mr. Pit.png",
  },
  {
    id: 2,
    name: "¡Q'Jamone!",
    desc: "c/jamon crudo",
    price: 350,
    category: "pizzas",
    img: "images/popular/¡Q’ Jamone!.png",
  },
  {
    id: 3,
    name: "La Charly Garcia",
    desc: "BASTA",
    price: 380,
    category: "pizzas",
    img: "images/popular/La Charly García.png",
  },
  {
    id: 4, 
    name: "La Maradona",
    desc: "¡Eterna!",
    price: 450,
    category: "pizzas",
    img: "images/popular/La Maradona.png",
    
  },
  {
    id: 5,
    name: "Picantovich",
    desc: "Pica 2 veces",
    price: 750,
    category: "pizzas",
    img: "images/popular/Picantovich.png",
  },
  {
    id: 6,
    name: "La Hasbulla",
    desc: "En honor al 1",
    price: 990,
    category: "pizzas",
    img: "images/popular/La Hasbulla.png",
  },
  {
    id: 7,
    name: "Leo Messi",
    desc: "¡De pie señores!",
    price: 10,
    category: "pizzas",
    img: "images/popular/Leo Messi.png",
  },
  {
    id: 8,
    name: "Nick Gi",
    desc: "La que desaparece",
    price: "Gratis",
    category: "pizzas",
    recommended: true,
    img: "images/popular/Nick Gi.png",
  },
  // HAMBURGUESAS
  {
    id: 9,
    name: "Americana",
    desc: "Sentite Yankiee",
    price: 400,
    category: "burgers",
    img: "images/burgers/americana.jpeg",
  },
  {
    id: 10,
    name: "BOOM",
    desc: "¡Explota los sabores!",
    price: 500,
    category: "burgers",
    recommended: true,
    img: "images/burgers/boom.jpeg",
  },
  {
    id: 11,
    name: "De la casa",
    desc: "Un halago",
    price: 400,
    category: "burgers",
    img: "images/burgers/delacasa.jpeg",
  },
  {
    id: 12,
    name: "TapaArterias",
    desc: "Para tres",
    price: 600,
    category: "burgers",
    img: "images/burgers/tapaarterias.jpeg",
  },
  // NAPAPUKIS
  {
    id: 13,
    name: "Cara de papa",
    desc: "Terrible",
    price: 600,
    category: "papas",
    img: "images/papas/caradepapa.jpeg",
  },
  {
    id: 14,
    name: "Metele Huevos",
    desc: "Como en la vida",
    price: 700,
    category: "papas",
    recommended: true,
    img: "images/papas/metelehuevos.jpg",
  },
  {
    id: 15,
    name: "Que Peregil",
    desc: "¡Probala, no seas gil!",
    price: 700,
    category: "papas",
    img: "images/papas/queperegil.jpeg",
  },
  {
    id: 16,
    name: "Que sabores",
    desc: "Al mejor estilo",
    price: 690,
    category: "papas",
    img: "images/papas/quesabor.jpg",
  },
  // WRAPS (No hay stock)

  // MEXICAN FOOD (No hay stock)


  // BATIDOS
  {
    id: 18,
    name: "NARANJA",
    desc: "Natural con especies",
    price: 500,
    category: "batidos",
    img: "images/batidos/naranja.jpeg",
  },
  {
    id: 19,
    name: "CHOCOLATE",
    desc: "Nada que aclarar",
    price: 500,
    category: "batidos",
    img: "images/batidos/chocolate.jpeg",
  },
  {
    id: 20,
    name: "Banana",
    desc: "Inspirados en Minions",
    price: 500,
    category: "batidos",
    img: "images/batidos/banana.jpeg",
  },
  {
    id: 21,
    name: "Griego",
    desc: "Fresa y Yogurt",
    price: 500,
    category: "batidos",
    img: "images/batidos/batido-de-frambuesa-y-yogur.jpg",
  },
];

const mostPopularProducts = () => {
  const popularProducts = [];
  for (let i = 0; i < 16; i++) {
    if (i % 2 == 0) {
      popularProducts.push(products[i]);
    }
  }
  return popularProducts;
};
