import img1 from "./assets/images/tour-1.jpeg";
import img2 from "./assets/images/tour-2.jpeg";
import img3 from "./assets/images/tour-3.jpeg";
import img4 from "./assets/images/tour-4.jpeg";

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "Home",
    alt: "Home",
  },
  {
    id: 2,
    href: "#about",
    text: "About",
    alt: "About",
  },
  {
    id: 3,
    href: "#services",
    text: "Services",
    alt: "Services",
  },
  {
    id: 4,
    href: "#tours",
    text: "Tours",
    alt: "Featured",
  },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.facebook.com",
    className: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.x.com",
    className: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.twitter.com",
    className: "fab fa-squarespace",
  },
];

export const serviceContent = [
  {
    id: 1,
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    className: "fas fa-wallet fa-fw",
    text: "saving money",
  },
  {
    id: 2,
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    className: "fas fa-tree fa-fw",
    text: "endless hiking",
  },
  {
    id: 3,
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    className: "fas fa-socks fa-fw",
    text: "amazing comfort",
  },
];

export const tourContent = [
  {
    id: 1,
    img: img1,
    p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    date: "august 26th, 2020",
    heading: "Tibet Adventure",
    location: "china",
    days: 6,
    price: "from $2100",
  },
  {
    id: 2,
    img: img2,
    p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    date: "october 1th, 2020",
    heading: "best of java",
    location: "indonesia",
    days: 11,
    price: "from $1400",
  },
  {
    id: 3,
    img: img3,
    p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    date: "september 15th, 2020",
    heading: "explore hong kong",
    location: "hong kong",
    days: 8,
    price: "from $5000",
  },
  {
    id: 4,
    img: img4,
    p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    date: "december 5th, 2019",
    heading: "kenya highlights",
    location: "kenya",
    days: 20,
    price: "from $3300",
  },
];
