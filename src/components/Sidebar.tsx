import { menu } from "@/utils";
import Link from "next/link";
import React from "react";

export const Sidebar = () => {
  return (
    <aside className="bg-base-100 w-80 h-full">
      <ul className="menu px-4 py-4">
        {menu.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
