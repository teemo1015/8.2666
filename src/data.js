// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from "react-icons/io";

// import images
import Features1Img from "./assets/img/hero4.jpeg";
import Features2Img from "./assets/img/hero4.jpeg";
import ChairImg from "./assets/img/6.png";
import BedImg from "./assets/img/7.png";
import CupboardImg from "./assets/img/6.png";
import LightingImg from "./assets/img/7.png";
import Product1Img from "./assets/img/products/1.png";
import Product2Img from "./assets/img/products/1.png";
import Product3Img from "./assets/img/products/1.png";
import Product4Img from "./assets/img/products/1.png";
import Product5Img from "./assets/img/products/1.png";
import Product6Img from "./assets/img/products/1.png";
import Product7Img from "./assets/img/products/1.png";
import Product8Img from "./assets/img/products/1.png";
import Product9Img from "./assets/img/products/1.png";
import Product10Img from "./assets/img/products/1.png";
import TestimonialImg from "./assets/img/hero4.jpeg";
import Avatar1Img from "./assets/img/avatar-1.png";
import Avatar2Img from "./assets/img/avatar-2.png";
import Avatar3Img from "./assets/img/avatar-3.png";
import Avatar4Img from "./assets/img/avatar-4.png";

export const navigation = [
  {
    name: "首頁",
    href: "/",
  },
  {
    name: "關於我們",
    href: "about",
  },
  {
    name: "服務項目",
    href: "service",
  },
  {
    name: "商品",
    href: "product",
  },
  {
    name: "聯絡我們",
    href: "contact",
  },
];

export const hero = {
  title: "追求一杯心目中的精品優質的咖啡",
  subtitle: "從生豆到烘焙到沖煮，希望能給客戶一個買得起又好喝的咖啡。",
  buttonText: "Shop Now",
};
export const heroabout = {
  title: "關於我們",
  subtitle: "",
  buttonText: "",
};
export const heroservice = {
  title: "服務項目",
  subtitle: "",
  buttonText: "",
};
export const heroproduct = {
  title: "商品",
  subtitle: "",
  buttonText: "",
};
export const herocontact = {
  title: "聯絡我們",
  subtitle: "",
  buttonText: "",
};

export const stats = [
  {
    value: "7年",
    text: "在地經營",
  },
  {
    value: "2",
    text: "台灣分店數",
  },
  {
    value: "95+",
    text: "評鑑分數",
  },
  {
    value: "20+",
    text: "商品種類",
  },
];

export const features = {
  image: <Features1Img />,
  title: "2014年10月開始將烘焙豆送至美國CoffeeReview評測",
  subtitle:
    "我們是一群平凡人，小小地珍惜著一份夢想，希望讓更多人喝到舒服的一杯好咖啡",
  buttonText: "Show Now",
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: "2018 TISCA 手沖咖啡競賽 冠軍",
      subtitle: "努力再努力，為了追求一杯心目中的精品優質的咖啡",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: "2018 TISCA 杯測挑戰賽 第四名",
      subtitle: "從生豆到烘焙到沖煮，都希望能給客戶一個買得起又好喝的咖啡。",
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: "2014年10月開始將烘焙豆送至美國CoffeeReview評測",
    subtitle: "從生豆到烘焙到沖煮，都希望能給客戶一個買得起又好喝的咖啡。",
  },
};

export const newInStore = {
  title: "來自世界各地的好咖啡",
  subtitle: "從生豆到烘焙到沖煮，都希望能給客戶一個買得起又好喝的咖啡。",
  link: "Check all",
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: "非洲",
      image: <ChairImg />,
    },
    {
      name: "南美洲",
      image: <BedImg />,
    },
    {
      name: "亞洲",
      image: <CupboardImg />,
    },
    {
      name: "印尼",
      image: <LightingImg />,
    },
  ],
};

export const products = {
  title: "所有商品",
  subtitle:
    "The products we provide only for you as our service are selected from the best products with number 1 quality in the world",
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "Ceiling Light",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "Wood Chair",
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: "Treos Seroes 911",
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: "Multi bilderman slibber",
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: "XORA corner desk",
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: "Black Forest Series Wood",
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "Ceiling Light",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "Wood Chair",
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: "Treos Seroes 911",
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: "Multi bilderman slibber",
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: "XORA corner desk",
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: "Black Forest Series Wood",
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: "5星好評",
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: "Josh Smith",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: <Avatar2Img />,
      name: "Brandi Johns",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: <Avatar3Img />,
      name: "Paula Pfeffer",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
  ],
};

export const newsletter = {
  title: "Get more discount Off your order",
  subtitle: "Join our mailing list",
  placeholder: "Your email address",
  buttonText: "Shop Now",
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: "#",
    },
    {
      icon: <IoLogoInstagram />,
      href: "#",
    },
    {
      icon: <IoLogoGithub />,
      href: "#",
    },
    {
      icon: <IoLogoFacebook />,
      href: "#",
    },
  ],
  copyright: "FurniShop 2022 - All Rights Reserved.",
};
