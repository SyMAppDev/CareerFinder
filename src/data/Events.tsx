import { colors } from "../utils/colors";
import { Careers } from "./Careers";

export interface EventType {
  title: string;
  image: NodeRequire[];
  description: string;
  date: string;
  time: string;
  location: string;
}

export const Events = [
  {
    title: "Cumpleañito",
    image: [require("../assets/images/LazyBull.png"),require("../assets/images/LazyBull.png"),require("../assets/images/LazyBull.png")],
    description:
      "Veni a festejar mi cumpleañito re govir.",
    date: '18/04/2025',
    time: '10:00',
    location: 'Libertad 893',
  },

  
];
