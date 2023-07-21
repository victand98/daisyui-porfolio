import { AiFillHome, AiOutlineUnorderedList } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

export const menu = [
  {
    name: "Home",
    href: "/",
    icon: <AiFillHome className="w-6 h-6 stroke-current" />,
  },
  {
    name: "About",
    href: "/about",
    icon: <BsPersonCircle className="w-6 h-6 stroke-current" />,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <AiOutlineUnorderedList className="w-6 h-6 stroke-current" />,
  },
];
