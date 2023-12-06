
import Link from "next/link";
import Image from "next/image";

import {
  faCartShopping,
  faMoneyBill,
  faTruckFast,
  faUsers,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import SidebarItem from "./SidebarItem";

export default function SideBar() {


  return (
    <aside
      className="bg-zinc-900 text-white
    h-full p-4 w-[250px] fixed"
    >
      <Link href="/">
        <Image
          src="/images/logo-sistema-web-pro-max.png"
          width={150}
          height={150}
          className="block mx-auto"
        />
      </Link>

      <nav className="mt-8">
        <ul>
          {items.map((item, i) => {
            return (
              <SidebarItem item={item}/>
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
    subMenus:[
      {
        nome:"Criar usuário",
        href:"/"
      },
      {
        nome:"Listar usuário",
        href:"/users",
      },
    ]
  },
  {
    name: "Produtos",
    icon: faCartShopping,
    subMenus: [
      {
        nome: "Criar produtos",
        href:"/",
      },
      {
        nome:"listar produtos",
        href:"/products",
      },
    ]
  },
  {
    name: "Vendas",
    icon: faMoneyBill,
    subMenus: [{
      nome:"Criar usuario",
      href:"/",
    },
    {
      nome:"listar",
      href:"/",
    },
  ]
  },
  {
    name: "Fornecedores",
    icon: faTruckFast,
    subMenus:[
      {
        nome:"Criar usuario",
        href:"/",
      },
      {
        nome:"Criar",
        href:"/",
      },
    ]
  },
  {
    name: "Armazens",
    icon: faWarehouse,
    subMenus:[
      {
        nome: "Criar usuario",
        href:"/",
      },
      {
        nome:"criar",
        href:"/",
      },
    ]
  },
];
