import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChevronDown,
  faMoneyBill,
  faTruckFast,
  faUsers,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  return (
    <aside
      className="bg-zinc-900 text-white
    h-full p-4 w-[250px]"
    >
      <Link href="/">
        <Image
          src="/images/logo-sistema-web-pro-max.png"
          width={150}
          height={150}
        />
      </Link>

      <nav>
        <ul>
          {items.map((item, i) => {
            return (
              <li className="border-b border-dashed cursor-pointer">
                <p>
                    <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={item.icon} className="w-6"/>
                {item.name}
                    </span>
                    <FontAwesomeIcon icon={faChevronDown} className="w-6"/>
                </p>
                
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

const items = [
  {
    name: "Usuarios",
    icon: faUsers,
  },
  {
    name: "Produtos",
    icon: faCartShopping,
  },
  {
    name: "Vendas",
    icon: faMoneyBill,
  },
  {
    name: "Fornecedores",
    icon: faTruckFast,
  },
  {
    name: "Armazens",
    icon: faWarehouse,
  },
];
