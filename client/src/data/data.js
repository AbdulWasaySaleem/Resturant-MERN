import burger1 from "../assets/burger1.jpg";
import gyros1 from "../assets/gyros1.jpg";
import pizza1 from "../assets/pizza1.jpg";
import pasta1 from "../assets/pasta1.jpg";

export const foodTypes = [
  {
    name: "burger",
    img: burger1,
    rating: 4.8,
    available: 8,
    id: crypto.randomUUID(),
    description: "Juicy, flame-grilled burgers layered with fresh toppings and gourmet sauces."
  },
  {
    name: "gyros",
    img: gyros1,
    rating: 4.5,
    available: 16,
    id: crypto.randomUUID(),
    description: "Authentic Greek gyros packed with seasoned meat, crisp veggies, and creamy tzatziki."
  },
  {
    name: "pizza",
    img: pizza1,
    rating: 4.7,
    available: 12,
    id: crypto.randomUUID(),
    description: "Wood-fired pizza with a crispy crust, rich tomato sauce, and melty cheese."
  },
  {
    name: "pasta",
    img: pasta1,
    rating: 4.6,
    available: 20,
    id: crypto.randomUUID(),
    description: "Classic Italian pasta dishes made with love, herbs, and rich, savory sauces."
  },
];
