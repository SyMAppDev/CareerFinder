import { colors } from "../utils/colors";
import { Careers } from "./Careers";

export interface InstitutionType {
  title: string;
  image: NodeRequire[];
  subtitle: Careers;
  description: string;
  availability: string;
  days: string;
  email: string;
  tel: string;
  address: string;
  isFavorite: boolean
}

export const Institutions = [
  {
    title: "FADU",
    image: [require("../assets/images/LazyBull.png"),require("../assets/images/LazyBull.png"),require("../assets/images/LazyBull.png")],
    subtitle: Careers.ARQUITECTURA,
    description:
      "Studying how CBD awareness and availability as it related to pain management alternatives.",
    availability: '9-11',
    days: 'Lunes a Viernes',
    email: 'email@domain.com',
    tel: '1234-5678',
    address: 'calle siempreviva 123',
    isFavorite: false
  },
  {
    id: 1,
    title: "UBA",
    image: [require("../assets/images/LazyBull.png"),require("../assets/images/LazyBull.png"),require("../assets/images/LazyBull.png")],
    subtitle: Careers.DERECHO,
    description:
      "Montana Higher Educational Institute. Gampaha montana.gampaha@gmail.com",
    availability: '9-11',
    days: 'Lunes a Viernes',
    email: 'email@domain.com',
    tel: '1234-5678',
    address: 'calle siempreviva 123',
    isFavorite: true
  },
  {
    id: 2,
    title: "ITBA",
    image: [require("../assets/images/LazyBull.png"),require("../assets/images/LazyBull.png"),require("../assets/images/LazyBull.png")],
    subtitle: Careers.INGENIERIA_INFORMATICA,
    description:
      "This is a private higher education center which conducting classes for GCE AL Students.",
    availability: '9-11',
    days: 'Lunes a Viernes',
    email: 'email@domain.com',
    tel: '1234-5678',
    address: 'calle siempreviva 123',
    isFavorite: false
  },
  {
    id: 3,
    title: "UADE",
    image: [require("../assets/images/LazyBull.png"),require("../assets/images/LazyBull.png"),require("../assets/images/LazyBull.png")],
    subtitle: Careers.INGENIERIA_INFORMATICA,
    description:
      "Studying how CBD awareness and availability as it related to pain management alternatives.",
    availability: '9-11',
    days: 'Lunes a Viernes',
    email: 'email@domain.com',
    tel: '1234-5678',
    address: 'calle siempreviva 123',
    isFavorite: true
  },

  {
    id: 4,
    title: "UBA",
    image: [require("../assets/images/LazyBull.png"),require("../assets/images/LazyBull.png"),require("../assets/images/LazyBull.png")],
    subtitle: Careers.MEDICINA,
    description: "Early college for gifted high schoolers",
        availability: '9-11',
    days: 'Lunes a Viernes',
    email: 'email@domain.com',
    tel: '1234-5678',
    address: 'calle siempreviva 123',
    isFavorite: false
  },
];
