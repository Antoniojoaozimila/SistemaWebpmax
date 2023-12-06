"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function SidebarItem({ item }) {
    const [open, setOpen] = useState (false);
  return (
    <li className="border-b border-dashed cursor-pointer">
      <p onClick={() => setOpen(!open)}
      
      className="p-2 flex justify-between hover:bg-zinc-800">
        <span className="flex items-center gap-1">
          <FontAwesomeIcon icon={item.icon} className="w-6" />
          {item.name}
        </span>
        <FontAwesomeIcon data-hidden={open} icon={faChevronCircleDown} className="w-4 data-[hidden=true]:rotate-180 transition-all"/>
      </p>
      <ul data-hidden={open} className="hidden data-[hidden=true]:block">
        {item.subMenus.map((subMenus) => {
          return (
            <li className="hover:bg-zinc-800 pl-6 py-1">
              -<Link href={subMenus.href}>{subMenus.nome}</Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
