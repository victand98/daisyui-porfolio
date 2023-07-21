import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
      <div>
        <BsFillPersonFill className="inline-block fill-current w-16 h-16" />
        <p className="font-bold">
          My Portfolio <br />
          myportfolio@email.com
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link href="#">
            <AiFillLinkedin className="fill-current w-6 h-6" />
          </Link>
          <Link href="#">
            <AiFillGithub className="fill-current w-6 h-6" />
          </Link>
          <Link href="#">
            <AiFillTwitterCircle className="fill-current w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
