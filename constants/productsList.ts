interface ProductsListProp {
   label: string;
   price: number;
   image: string;
   large?: boolean;
}

interface MobilProductsListProp extends ProductsListProp {
   hoverable1?: boolean;
   hoverable2?: boolean;
}

/////////////////////////////////////////////////////////////////////////////

// mobile products list
export const mobileProductsList: ProductsListProp[] = [
   {
      label: "Lira Earrings",
      price: 20,
      image: "/assets/liraSmal.jpg",
   },
   {
      label: "Ollie Earrings",
      price: 30,
      image: "/assets/ollieSmal.jpg",
   },
   {
      label: "Hal Earrings",
      price: 23,
      image: "/assets/halSmall.jpg",
      large: true,
   },
   {
      label: "Kaede Earrings",
      price: 30,
      image: "/assets/kaedeSmal.jpg",
   },
   {
      label: "Yuki Earrings",
      price: 29,
      image: "/assets/yukiSmall.jpg",
   },
];

/////////////////////////////////////////////////////////////////////////////

// desktop products list

export const desktopProductsList: MobilProductsListProp[] = [
   {
      label: "Lira Earrings",
      price: 20,
      image: "/assets/liraSmal.jpg",
   },
   {
      label: "Ollie Earrings",
      price: 30,
      image: "/assets/ollieSmal.jpg",
   },
   {
      label: "Kaede Earrings Set Of 3",
      price: 30,
      image: "/assets/kaedeSmal.jpg",
   },
   {
      label: "Hair Pin Set Of 3",
      price: 29,
      image: "/assets/HairPin.jpg",
      hoverable1: true,
   },
   {
      label: "Plaine Necklace",
      price: 19,
      image: "/assets/Plain.png",
   },
   {
      label: "Yuki Hair Pin Set Of 3",
      price: 23,
      image: "/assets/halSmall.jpg",
      hoverable2: true,
   },
];
