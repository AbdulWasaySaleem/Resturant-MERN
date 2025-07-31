import burger1 from "../assets/burger1.jpg";
import gyros1 from "../assets/gyros1.jpg";
import pizza1 from "../assets/pizza1.jpg";
import pasta1 from "../assets/pasta1.jpg";

export const foodTypes = [
  {
    name: "burger",
    img: burger1,
    rating: 4.8,
    id: crypto.randomUUID(),
  },
  {
    name: "gyros",
    img: gyros1,
    rating: 4.5,
    id: crypto.randomUUID(),
  },
  {
    name: "pizza",
    img: pizza1,
    rating: 4.7,
    id: crypto.randomUUID(),
  },
  {
    name: "pasta",
    img: pasta1,
    rating: 4.6,
    id: crypto.randomUUID(),
  },
];
