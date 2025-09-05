import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const servicesData = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    name: "saving money",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.`,
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    name: "endless hiking",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.`,
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    name: "amazing comfort",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.`,
  },
];

export const toursData = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2025",
    name: "Tibet Adventure",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    country: "China",
    duration: 6,
    price: "2600.00",
  },
  {
    id: 2,
    image: tour2,
    date: "october 11th, 2025",
    name: "Best of Java",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    country: "Indonesia",
    duration: 11,
    price: "1400.00",
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2025",
    name: "Explore Hong Kong",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    country: "Hong Kong",
    duration: 8,
    price: "5000.00",
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2019",
    name: "kenya highlights",
    description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    country: "kenya",
    duration: 20,
    price: 3300,
  },
];
