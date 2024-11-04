import burger_1 from "../assets/images/burger_1.png";
import burger_2 from "../assets/images/burger_2.png";
import burger_3 from "../assets/images/burger_3.png";
import burger_4 from "../assets/images/burger_4.png";
import side_1 from "../assets/images/sides_1.png";
import side_2 from "../assets/images/sides_2.png";
import side_3 from "../assets/images/sides_3.png";
import side_4 from "../assets/images/sides_4.png";
import dessert_1 from "../assets/images/dessert_1.png";
import dessert_2 from "../assets/images/dessert_2.png";
import dessert_3 from "../assets/images/dessert_3.png";
import dessert_4 from "../assets/images/dessert_4.png";
import drink_1 from "../assets/images/drink_1.png";
import drink_2 from "../assets/images/drink_2.png";
import drink_3 from "../assets/images/drink_3.png";
import drink_4 from "../assets/images/drink_4.png";
import employees from "../assets/images/employers.png";
import burgers_1 from "../assets/images/burgers_1.png";
import burgers_2 from "../assets/images/burgers_2.png";
import burger from "../assets/images/burger.png";

export const burgurData = [
  {
    id: 1,
    image: burger_1,
    price: "8.99",
    type: "Classic Burger",
    desc: "Juicy beef patty, fresh lettuce, tomatoes, onions, pickles, and our special house sauce.",
  },
  {
    id: 2,
    image: burger_2,
    price: "8.99",
    type: "Cheese Burger",
    desc: "Juicy beef patty topped with melted cheddar cheese, fresh lettuce, tomatoes, onions, pickles, and ketchup on a toasted bun.",
  },
  {
    id: 3,
    image: burger_3,
    price: "8.99",
    type: "Bacon BBQ Burger",
    desc: "Beef patty with crispy bacon, cheddar cheese, onion rings, BBQ sauce, lettuce, and tomatoes on a toasted bun.",
  },
  {
    id: 4,
    image: burger_4,
    price: "8.99",
    type: "Spicy Jalapeño Burger",
    desc: "Spicy beef patty, pepper jack cheese, jalapeños, lettuce, tomatoes, and chipotle mayo on a toasted bun.",
  },
];

export const sideData = [
  {
    id: 1,
    image: side_1,
    price: "2.99",
    type: "French Fries",
    desc: "Juicy beef patty, fresh lettuce, tomatoes, onions, pickles, and our special house sauce.",
  },
  {
    id: 2,
    image: side_2,
    price: "3.99",
    type: "Sweet Potato Fries",
    desc: "Crispy golden fries.",
  },
  {
    id: 3,
    image: side_3,
    price: "3.99",
    type: "Onion Rings",
    desc: "Crunchy onion rings served with ranch dipping sauce.",
  },
  {
    id: 4,
    image: side_4,
    price: "4.99",
    type: "Mozzarella Sticks",
    desc: "Golden fried mozzarella sticks served with marinara sauce.",
  },
];

export const dessertData = [
  {
    id: 1,
    image: dessert_1,
    price: "5.99",
    type: "Chocolate Brownie",
    desc: "Rich and fudgy chocolate brownie served with vanilla ice cream",
  },
  {
    id: 2,
    image: dessert_2,
    price: "5.99",
    type: "Apple Pie",
    desc: "Classic apple pie served with a scoop of vanilla ice cream.",
  },
  {
    id: 3,
    image: dessert_3,
    price: "5.99",
    type: "Cheesecake",
    desc: "Creamy cheesecake with a graham cracker crust, topped with strawberry sauce.",
  },
  {
    id: 4,
    image: dessert_4,
    price: "4.99",
    type: "Milkshake Sundae",
    desc: "Golden fried mozzarella sticks served with marinara sauce.",
  },
];

export const drinkData = [
  {
    id: 1,
    image: drink_1,
    price: "1.99",
    type: "Soda",
    desc: "Choice of cola, lemonade, or root beer.",
  },
  {
    id: 2,
    image: drink_2,
    price: "2.99",
    type: "Iced Tea",
    desc: "Freshly brewed iced tea, sweetened or unsweetened.",
  },
  {
    id: 3,
    image: drink_3,
    price: "1.99",
    type: "Bottled Water",
    desc: "Refreshing bottled spring water.",
  },
  {
    id: 4,
    image: drink_4,
    price: "4.99",
    type: "Craft Beer",
    desc: "Selection of local craft beers.",
  },
];

export const LatestNewData = [
  {
    id: 1,
    image: burgers_1,
    title: "Introducing Our New Summer Menu",
    createAt: "Apr 8, 2024",
    intro:
      "Discover the secrets behind our mouth-watering burgers, and get the scoop on exclusive discounts.",
    present:
      "Have you ever wondered who makes your favorite burgers at Burger Haven? We're excited to take you behind the scenes to meet the passionate team that brings our delicious creations to life. From the kitchen to the front of the house, every member of our team plays a crucial role in delivering the Burger Haven experience you love.",
    details: [
      {
        section: "New Summer Menu Highlights",
        items: [
          {
            name: "Spicy Jalapeño Burger",
            description:
              "This burger features a spicy beef patty, topped with pepper jack cheese, fresh jalapeños, crisp lettuce, juicy tomatoes, and a smoky chipotle mayo, all nestled in a toasted bun.",
            price: "$10.49",
          },
          {
            name: "Tropical Chicken Burger",
            description:
              "Grilled chicken breast, sweet pineapple slices, tangy teriyaki sauce, lettuce, and tomatoes, all served on a soft Hawaiian bun.",
            price: "$11.99",
          },
          {
            name: "Avocado Veggie Wrap",
            description:
              "Packed with fresh avocado, crisp lettuce, tomatoes, cucumbers, red onions, and a zesty lime cilantro dressing, all wrapped up in a whole wheat tortilla.",
            price: "$9.99",
          },
          {
            name: "Watermelon Feta Salad",
            description:
              "Juicy watermelon, tangy feta cheese, fresh mint, and a balsamic glaze.",
            price: "$8.99",
          },
          {
            name: "Pineapple Smoothie",
            description:
              "A refreshing blend of pineapple, coconut milk, and a hint of lime.",
            price: "$5.99",
          },
        ],
      },
      {
        section: "Special Summer Drinks",
        items: [
          {
            name: "Classic Lemonade",
            description: "Refreshing and tangy, perfect for a hot day.",
            price: "$3.49",
          },
          {
            name: "Strawberry Basil Lemonade",
            description: "A sweet and herbaceous twist on a classic.",
            price: "$3.99",
          },
          {
            name: "Mango Mint Lemonade",
            description: "Tropical mango paired with cooling mint.",
            price: "$3.99",
          },
        ],
      },
      {
        section: "Limited-Time Dessert",
        items: [
          {
            name: "Key Lime Pie",
            description:
              "A graham cracker crust filled with tangy and creamy key lime filling, topped with whipped cream and a slice of lime.",
            price: "$4.99",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    image: employees,
    title: "Behind The Scenes at Burger Haven",
    createAt: "Mar 15, 2024",
    intro:
      "Discover the secrets behind our mouth-watering burgers, and get the scoop on exclusive discounts.",
    present:
      "Have you ever wondered who makes your favorite burgers at Burger Haven? We're excited to take you behind the scenes to meet the passionate team that brings our delicious creations to life. From the kitchen to the front of the house, every member of our team plays a crucial role in delivering the Burger Haven experience you love.",
    details: [
      {
        section: "New Summer Menu Highlights",
        items: [
          {
            name: "Spicy Jalapeño Burger",
            description:
              "This burger features a spicy beef patty, topped with pepper jack cheese, fresh jalapeños, crisp lettuce, juicy tomatoes, and a smoky chipotle mayo, all nestled in a toasted bun.",
            price: "$10.49",
          },
          {
            name: "Tropical Chicken Burger",
            description:
              "Grilled chicken breast, sweet pineapple slices, tangy teriyaki sauce, lettuce, and tomatoes, all served on a soft Hawaiian bun.",
            price: "$11.99",
          },
          {
            name: "Avocado Veggie Wrap",
            description:
              "Packed with fresh avocado, crisp lettuce, tomatoes, cucumbers, red onions, and a zesty lime cilantro dressing, all wrapped up in a whole wheat tortilla.",
            price: "$9.99",
          },
          {
            name: "Watermelon Feta Salad",
            description:
              "Juicy watermelon, tangy feta cheese, fresh mint, and a balsamic glaze.",
            price: "$8.99",
          },
          {
            name: "Pineapple Smoothie",
            description:
              "A refreshing blend of pineapple, coconut milk, and a hint of lime.",
            price: "$5.99",
          },
        ],
      },
      {
        section: "Special Summer Drinks",
        items: [
          {
            name: "Classic Lemonade",
            description: "Refreshing and tangy, perfect for a hot day.",
            price: "$3.49",
          },
          {
            name: "Strawberry Basil Lemonade",
            description: "A sweet and herbaceous twist on a classic.",
            price: "$3.99",
          },
          {
            name: "Mango Mint Lemonade",
            description: "Tropical mango paired with cooling mint.",
            price: "$3.99",
          },
        ],
      },
      {
        section: "Limited-Time Dessert",
        items: [
          {
            name: "Key Lime Pie",
            description:
              "A graham cracker crust filled with tangy and creamy key lime filling, topped with whipped cream and a slice of lime.",
            price: "$4.99",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    image: burgers_2,
    title: "Our Commitment to Substainabiity",
    createAt: "Feb 28, 2024",
    intro:
      "Discover the secrets behind our mouth-watering burgers, and get the scoop on exclusive discounts.",
    present:
      "Have you ever wondered who makes your favorite burgers at Burger Haven? We're excited to take you behind the scenes to meet the passionate team that brings our delicious creations to life. From the kitchen to the front of the house, every member of our team plays a crucial role in delivering the Burger Haven experience you love.",
    details: [
      {
        section: "New Summer Menu Highlights",
        items: [
          {
            name: "Spicy Jalapeño Burger",
            description:
              "This burger features a spicy beef patty, topped with pepper jack cheese, fresh jalapeños, crisp lettuce, juicy tomatoes, and a smoky chipotle mayo, all nestled in a toasted bun.",
            price: "$10.49",
          },
          {
            name: "Tropical Chicken Burger",
            description:
              "Grilled chicken breast, sweet pineapple slices, tangy teriyaki sauce, lettuce, and tomatoes, all served on a soft Hawaiian bun.",
            price: "$11.99",
          },
          {
            name: "Avocado Veggie Wrap",
            description:
              "Packed with fresh avocado, crisp lettuce, tomatoes, cucumbers, red onions, and a zesty lime cilantro dressing, all wrapped up in a whole wheat tortilla.",
            price: "$9.99",
          },
          {
            name: "Watermelon Feta Salad",
            description:
              "Juicy watermelon, tangy feta cheese, fresh mint, and a balsamic glaze.",
            price: "$8.99",
          },
          {
            name: "Pineapple Smoothie",
            description:
              "A refreshing blend of pineapple, coconut milk, and a hint of lime.",
            price: "$5.99",
          },
        ],
      },
      {
        section: "Special Summer Drinks",
        items: [
          {
            name: "Classic Lemonade",
            description: "Refreshing and tangy, perfect for a hot day.",
            price: "$3.49",
          },
          {
            name: "Strawberry Basil Lemonade",
            description: "A sweet and herbaceous twist on a classic.",
            price: "$3.99",
          },
          {
            name: "Mango Mint Lemonade",
            description: "Tropical mango paired with cooling mint.",
            price: "$3.99",
          },
        ],
      },
      {
        section: "Limited-Time Dessert",
        items: [
          {
            name: "Key Lime Pie",
            description:
              "A graham cracker crust filled with tangy and creamy key lime filling, topped with whipped cream and a slice of lime.",
            price: "$4.99",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    image: burger,
    title: "Celebrating One Year of Deliciousness",
    createAt: "Feb 6, 2024",
    intro:
      "Discover the secrets behind our mouth-watering burgers, and get the scoop on exclusive discounts.",
    present:
      "Have you ever wondered who makes your favorite burgers at Burger Haven? We're excited to take you behind the scenes to meet the passionate team that brings our delicious creations to life. From the kitchen to the front of the house, every member of our team plays a crucial role in delivering the Burger Haven experience you love.",
    details: [
      {
        section: "New Summer Menu Highlights",
        items: [
          {
            name: "Spicy Jalapeño Burger",
            description:
              "This burger features a spicy beef patty, topped with pepper jack cheese, fresh jalapeños, crisp lettuce, juicy tomatoes, and a smoky chipotle mayo, all nestled in a toasted bun.",
            price: "$10.49",
          },
          {
            name: "Tropical Chicken Burger",
            description:
              "Grilled chicken breast, sweet pineapple slices, tangy teriyaki sauce, lettuce, and tomatoes, all served on a soft Hawaiian bun.",
            price: "$11.99",
          },
          {
            name: "Avocado Veggie Wrap",
            description:
              "Packed with fresh avocado, crisp lettuce, tomatoes, cucumbers, red onions, and a zesty lime cilantro dressing, all wrapped up in a whole wheat tortilla.",
            price: "$9.99",
          },
          {
            name: "Watermelon Feta Salad",
            description:
              "Juicy watermelon, tangy feta cheese, fresh mint, and a balsamic glaze.",
            price: "$8.99",
          },
          {
            name: "Pineapple Smoothie",
            description:
              "A refreshing blend of pineapple, coconut milk, and a hint of lime.",
            price: "$5.99",
          },
        ],
      },
      {
        section: "Special Summer Drinks",
        items: [
          {
            name: "Classic Lemonade",
            description: "Refreshing and tangy, perfect for a hot day.",
            price: "$3.49",
          },
          {
            name: "Strawberry Basil Lemonade",
            description: "A sweet and herbaceous twist on a classic.",
            price: "$3.99",
          },
          {
            name: "Mango Mint Lemonade",
            description: "Tropical mango paired with cooling mint.",
            price: "$3.99",
          },
        ],
      },
      {
        section: "Limited-Time Dessert",
        items: [
          {
            name: "Key Lime Pie",
            description:
              "A graham cracker crust filled with tangy and creamy key lime filling, topped with whipped cream and a slice of lime.",
            price: "$4.99",
          },
        ],
      },
    ],
  },
];
