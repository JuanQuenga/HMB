export type Product = {
  name: string;
  size: string;
  price: number;
};

export type ProductCategory = {
  category: string;
  items: Product[];
};

export const productCategories: ProductCategory[] = [
  {
    category: "Bread",
    items: [
      { name: "Cinnamon Bread", size: "20 OZ", price: 4.95 },
      { name: "French Bread", size: "16 OZ", price: 2.9 },
      { name: "Four Seeds Bread", size: "20 OZ", price: 6.55 },
      { name: "Grain Mix Bread", size: "20 OZ", price: 6.55 },
      { name: "Pan De Coco", size: "4 PCS/PKG", price: 2.6 },
      { name: "Pan De Coco", size: "2 PCS/PKG", price: 1.55 },
      { name: "Pan De Leche", size: "12 PCS/PKG", price: 3.9 },
      { name: "Pan De Sal", size: "8 PCS/PKG", price: 1.95 },
      { name: "Pan De Sal w/ Cheese", size: "8 PCS/PKG", price: 3.15 },
      { name: "Pan Tuba Sweet Bread", size: "6 PCS/PKG", price: 5.5 },
      { name: "Pan Tuba Sweet Bread", size: "2 PCS/PKG", price: 1.65 },
      { name: "Pan Toasta Sticks", size: "12 PCS/PKG", price: 2.3 },
      { name: "Pullman White Bread", size: "23 OZ", price: 3.05 },
      {
        name: "Pullman White Bread (1/2 of XL - size)",
        size: "18 OZ",
        price: 2.6,
      },
      { name: "Pullman White Extra Large", size: "36 OZ", price: 5.0 },
      { name: "Raisin Bread", size: "20 OZ", price: 4.65 },
      { name: "Raisin Log", size: "10.50 OZ", price: 3.1 },
      { name: "Rye Bread", size: "20 OZ", price: 3.7 },
      { name: "Spanish Bread", size: "4 PCS/PKG", price: 2.9 },
      { name: "Spanish Bread", size: "2 PCS/PKG", price: 1.9 },
      { name: "Sweet Bread - HMB", size: "6 PCS/PKG", price: 2.9 },
      { name: "Sweet Bread Loaf", size: "23 OZ", price: 3.3 },
      { name: "Sweet Bread Toasted", size: "4 OZ", price: 1.4 },
      { name: "Wheat - Whole Extra Large", size: "36 OZ", price: 6.5 },
      { name: "Wheat - Whole Pullman Size", size: "23 OZ", price: 3.85 },
      {
        name: "Wheat - Whole Bread 100% Whole Wheat",
        size: "16 OZ",
        price: 3.5,
      },
    ],
  },
  {
    category: "Buns & Rolls",
    items: [
      { name: "Dinner Rolls", size: "12 PCS/PKG", price: 2.25 },
      {
        name: "Dinner Rolls Regular Whole Wheat",
        size: "12 PCS/PKG",
        price: 2.45,
      },
      { name: "Hamburger Buns Regular", size: "8 PCS/PKG", price: 3.1 },
      { name: "Hamburger Buns - Whole Wheat", size: "8 PCS/PKG", price: 3.7 },
      { name: 'Hotdog Buns - Regular 6"', size: "8 PCS/PKG", price: 2.85 },
      { name: "Sweet Bread Dinner Rolls", size: "12 CT", price: 2.1 },
    ],
  },
  {
    category: "Pastries & Rolls",
    items: [
      { name: "Anpan Regular", size: "2 PCS/PKG", price: 1.55 },
      { name: "Anpan Regular", size: "4 PCS/PKG", price: 2.65 },
      { name: "Apple/Lemon Turnover Regular", size: "2 PCS/PKG", price: 3.1 },
      { name: "Apple/Lemon Turnover Regular", size: "4 PCS/PKG", price: 5.65 },
      { name: "Papaya Turnover", size: "2 PCS/PKG", price: 3.75 },
      { name: "Bavarian Filled Rolls", size: "6PCS/PKG", price: 4.3 },
      { name: "Bavarian Filled Rolls", size: "2 PCS/PKG", price: 1.5 },
      { name: "Blueberry Rolls", size: "2 PCS/PKG", price: 1.65 },
      { name: "Blueberry Cream Cheese Log", size: "9.2 OZ", price: 3.35 },
      { name: "Cheesecake Cupcake", size: "2.50 OZ", price: 1.95 },
      {
        name: "Cherry Turnover/Blueberry Turnover",
        size: "4 PCS/PKG",
        price: 6.4,
      },
      {
        name: "Cherry Turnover/Blueberry Turnover",
        size: "2 PCS/PKG",
        price: 3.5,
      },
      { name: "Chocolate Eclairs", size: "2 OZ", price: 1.95 },
      { name: "Chocolate Mouse", size: "2.5 OZ", price: 3.4 },
      { name: "Chocolate Tart", size: "2 OZ", price: 3.05 },
      { name: "Cinnamon Bun", size: "3 OZ", price: 2.45 },
      { name: "Cinnamon Danish Regular", size: "3 OZ", price: 1.95 },
      { name: "Cinnamon Danish Mini", size: "1 OZ", price: 0.75 },
      { name: "Cinnamon Raisin Rolls", size: "9 PCS/PKG", price: 4.7 },
      { name: "Cream Puffs", size: "1 OZ", price: 1.0 },
      { name: "Croissant Regular", size: "2.5 OZ", price: 1.5 }, // Price not listed
      { name: "Croissant Mini", size: "1 OZ", price: 0.8 }, // Price not listed
      { name: "Cupcake Assorted", size: "6 PCS/PKG", price: 9.75 }, // Price not listed
      { name: "Cupcake Reg. Flower in a Board", size: "24 CT", price: 42.25 }, // Price not listed
      {
        name: "Cupcake Chocolate w/ Light Icing",
        size: "6 PCS/PKG",
        price: 9.75,
      }, // Price not listed
      { name: "Cupcake Chocolate w/o Icing", size: "6 PCS/PKG", price: 6.65 }, // Price not listed
      { name: "Cupcake Chocolate in a Board", size: "24 CT", price: 42.55 }, // Price not listed
      { name: "Cupcake Chocolate Addtl. in Board", size: "PIECE", price: 1.65 }, // Price not listed
      { name: "Cup Cake Mini Chocolate", size: "12 PCS/PKG", price: 6.35 }, // Price not listed
      {
        name: "Cup Cake Mini Velvet w/ Icing",
        size: "12 PCS/PKG",
        price: 9.75,
      }, // Price not listed
      { name: "Custard Tart", size: "PIECE", price: 2.95 }, // Price not listed
      { name: "New York Cheesecake Cupcake", size: "PIECE", price: 2.15 }, // Price not listed
      {
        name: "New York Cheesecake Cupcake",
        size: "PIECE W.CONT.",
        price: 2.9,
      }, // Price not listed
      { name: "Danish - Assorted Fruits Regular", size: "2 OZ", price: 1.6 }, // Price not listed
      { name: "Danish - Assorted Fruits Mini", size: "1 OZ", price: 1.05 }, // Price not listed
      { name: "Donut Filled", size: "2 OZ", price: 1.9 }, // Price not listed
      { name: "Donut Sugar", size: "2 OZ", price: 1.5 }, // Price not listed
      { name: "Donut Choco/White Glazed", size: "2 OZ", price: 1.8 }, // Price not listed
      { name: "Ensaymada Plain Regular", size: "6PCS/PKG", price: 5.15 }, // Price not listed
      { name: "Ensaymada Mini", size: "6PCS/PKG", price: 2.45 }, // Price not listed
      { name: "Hopia - Beans", size: "4 PCS/PKG", price: 3.3 }, // Price not listed
    ],
  },
  {
    category: "Cookies",
    items: [
      { name: "Almond Cookies", size: "6 OZ", price: 3.75 },
      { name: "Almond Cookies", size: "10 OZ", price: 5.25 },
      { name: "Biscocho", size: "6 OZ", price: 2.3 },
      { name: "Choco Chip Red Velvet Cookies", size: "6 CT", price: 4.0 },
      { name: "Choco Chip Red Velvet Cookies", size: "10 OZ", price: 3.75 },
      { name: "Coconut Macaroons Cookies", size: "10 OZ", price: 8.8 },
      { name: "Coconut Macaroons in Plastic", size: "6 OZ", price: 5.15 },
      { name: "Coffee Green Tea Cookies", size: "6 OZ", price: 3.75 },
      { name: "Coffee Green Tea Cookies", size: "10 OZ", price: 5.25 },
      { name: "Coffee Green Tea Cookies", size: "6 CT", price: 2.9 },
      { name: "Coffee Green Tea Cookies", size: "10 CT", price: 4.3 },
      { name: "Guzuria in Plastic", size: "6 OZ", price: 3.3 },
      { name: "Guzuria", size: "10 OZ", price: 4.55 },
      { name: "Lollipop Butterfly Cookies", size: "3 OZ", price: 4.3 },
      { name: "Lollipop Cookies-(Flower Design)", size: "3 OZ", price: 4.3 },
      {
        name: "Lollipop Cookies-(Cartoon Character)",
        size: "3 OZ",
        price: 4.3,
      },
      { name: "Oatmeal Chocolate Chips Cookies", size: "10 OZ", price: 6.25 },
      { name: "Oatmeal Chocolate Chips Cookies", size: "6 OZ", price: 4.4 },
      { name: "Oatmeal Cookies Plain", size: "10 OZ", price: 6.05 },
      { name: "Oatmeal Cookies Plain", size: "6 OZ", price: 3.95 },
      { name: "Oatmeal Cookies Raisins", size: "6 OZ", price: 4.4 },
      { name: "Oatmeal Cookies Raisins", size: "10 OZ", price: 6.25 },
      { name: "Peanut Butter Cookies", size: "10 OZ", price: 5.2 },
      { name: "Peanut Butter Cookies (Large)", size: "10 PCS/PKG", price: 4.9 },
      { name: "Peanut Butter Cookies (Large)", size: "6 PCS/PKG", price: 3.35 },
      { name: "Peanut Butter Cookies in Plastic", size: "6 OZ", price: 3.75 },
      { name: "Raisin Drop Cookies", size: "10 OZ", price: 6.4 },
      { name: "Raisin Drop Cookies", size: "6 OZ", price: 4.05 },
      { name: "Rice Krispies Cookies", size: "10 OZ", price: 7.3 },
      { name: "Rice Krispies Cookies", size: "6 OZ", price: 4.65 },
      { name: "Rosketti", size: "8 OZ", price: 5.75 },
      { name: "Rosku", size: "13 OZ/PKG", price: 5.3 },
      { name: "Rosku", size: "18 OZ/PKG", price: 6.35 },
      { name: "Rosku", size: "3.50 OZ", price: 1.75 },
      { name: "Saipan Mocha Cookies", size: "10 OZ", price: 6.3 },
      { name: "Saipan Mocha in Plastic", size: "6 OZ", price: 4.5 },
      { name: "Sandies Cookies in Plastic", size: "6 OZ", price: 4.1 },
      { name: "Sandies Cookies", size: "10 OZ", price: 6.25 },
    ],
  },
  {
    category: "Pies & Cheese Cake",
    items: [
      { name: "Chamorro Cake Plain", size: "13.5 OZ, 7th ROUND", price: 4.75 },
      {
        name: "Chamorro Cake w/ Raisin",
        size: "14.5 OZ, 7th ROUND",
        price: 4.85,
      },
      { name: "Chamorro Cake Plain", size: "19 OZ, 8th ROUND", price: 6.85 },
      { name: "Chamorro Cake Plain Toasted", size: "8th ROUND", price: 6.95 },
      {
        name: "Chamorro Cake w/ Raisin",
        size: "21 OZ, 8th ROUND",
        price: 7.25,
      },
      {
        name: "Chamorro Cake w/ Raisin Toasted",
        size: "8th ROUND",
        price: 7.35,
      },
      { name: "Cheese Cake, Blueberry", size: "8th ROUND", price: 14.2 },
      { name: "Cheese Cake, Plain", size: "8th ROUND", price: 10.1 },
      { name: "Cheese Cake, Pumpkin", size: "8th ROUND", price: 12.75 },
      { name: "New York Cheesecake Pie", size: "8th ROUND", price: 25.5 },
      { name: "New York Cheesecake Plain", size: "8th ROUND", price: 43.9 },
      { name: "New York Cheese Cake Plain", size: "SLICED CAKE", price: 4.65 },
      {
        name: "New York Mini Heart Cheesecake (Asstd Flavors)",
        size: "PER SLICE",
        price: 9.5,
      },
      { name: "Pie, Apple", size: "8th ROUND", price: 11.5 },
      { name: "Pie, Banana Cream", size: "8th ROUND", price: 16.0 },
      { name: "Pie, Blueberry", size: "8th ROUND", price: 13.95 },
      { name: "Pie, Cherry", size: "8th ROUND", price: 14.25 },
      { name: "Pie, Custard", size: "8th ROUND", price: 10.55 },
      { name: "Pie, Lemon", size: "8th ROUND", price: 17.5 },
      { name: "Pie, Mango", size: "8th ROUND", price: 15.15 },
      { name: "Pie, Pecan", size: "8th ROUND", price: 20.6 },
      { name: "Pie, Pumpkin", size: "8th ROUND", price: 11.9 },
      { name: "Pie, Pumpkin Custard Pie", size: "8th ROUND", price: 12.95 },
      { name: "Pie, Strawberry", size: "8th ROUND", price: 15.25 },
      { name: "Pie, Sweet Potato", size: "8th ROUND", price: 10.55 },
      { name: "Sponge Cake Lemon", size: "7th ROUND", price: 8.5 },
      { name: "Sponge Cake 9 OZ", size: "8th ROUND", price: 6.0 },
      { name: "Sponge Cake Toasted", size: "8th ROUND", price: 6.1 },
    ],
  },
];
