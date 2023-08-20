interface NavProp {
   label: string;
   href: string;
}

export const navLinks: NavProp[] = [
   {
      label: "Home",
      href: "/",
   },
   {
      label: "Shop",
      href: "/shop",
   },
   {
      label: "About",
      href: "/about",
   },
   {
      label: "Blog",
      href: "/blog",
   },
   {
      label: "Help",
      href: "/help",
   },
   {
      label: "Contact",
      href: "/contact",
   },
   {
      label: "Search",
      href: "/serach",
   },
];

// <Link
// href="/shop"
// className={`hover:scale-[1.1] border-Black transition-border ease ${
//    path === "/shop" ? "border-b-2" : ""
// }`}
// onClick={smoothScrollAndCloseMenu}>
// <li>
//    <h3>Shop</h3>
// </li>
// </Link>
// <Link
// href="/about"
// className={`hover:scale-[1.1] border-Black transition-border ease ${
//    path === "/about" ? "border-b-2" : ""
// }`}
// onClick={smoothScrollAndCloseMenu}>
// <li>
//    <h3>About</h3>
// </li>
// </Link>
// <Link
// href="/blog"
// className={`hover:scale-[1.1] border-Black transition-border ease ${
//    path === "/blog" ? "border-b-2" : ""
// }`}
// onClick={smoothScrollAndCloseMenu}>
// <li>
//    <h3>Blog</h3>
// </li>
// </Link>
// <Link
// href="/help"
// className={`hover:scale-[1.1] border-Black transition-border ease ${
//    path === "/help" ? "border-b-2" : ""
// }`}
// onClick={smoothScrollAndCloseMenu}>
// <li>
//    <h3>Help</h3>
// </li>
// </Link>
// <Link
// href="/contact"
// className={`hover:scale-[1.1] border-Black transition-border ease ${
//    path === "/contact" ? "border-b-2" : ""
// }`}
// onClick={smoothScrollAndCloseMenu}>
// <li>
//    <h3>Contact</h3>
// </li>
// </Link>
// <Link
// href="/search"
// className={`hover:scale-[1.1] border-Black transition-border ease ${
//    path === "/search" ? "border-b" : ""
// }`}
//
// <li>
//    <h3>Search</h3>
// </li>
// </Link>
