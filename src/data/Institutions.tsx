import { colors } from "../utils/colors";
import { Careers } from "./Careers";

export interface InstitutionType {
  title: string;
  image: NodeRequire;
  subtitle: Careers;
  description: string;
}

export const Institutions = [
  {
    title: "FADU",
    image: require("../assets/images/LazyBull.png"),
    subtitle: Careers.ARQUITECTURA,
    description:
      "Studying how CBD awareness and availability as it related to pain management alternatives.",
  },
  {
    id: 1,
    title: "UBA",
    image: require("../assets/images/LazyBull.png"),
    subtitle: Careers.DERECHO,
    description:
      "Montana Higher Educational Institute. Gampaha montana.gampaha@gmail.com",

  },
  {
    id: 2,
    title: "ITBA",
    image: require("../assets/images/LazyBull.png"),
    subtitle: Careers.INGENIERIA_INFORMATICA,
    description:
      "This is a private higher education center which conducting classes for GCE AL Students.",
  },
  {
    id: 3,
    title: "UADE",
    image: require("../assets/images/LazyBull.png"),
    subtitle: Careers.INGENIERIA_INFORMATICA,
    description:
      "Studying how CBD awareness and availability as it related to pain management alternatives.",
  },

  {
    id: 4,
    title: "UBA",
    image: require("../assets/images/LazyBull.png"),
    subtitle: Careers.MEDICINA,
    description: "Early college for gifted high schoolers",
  },
];
