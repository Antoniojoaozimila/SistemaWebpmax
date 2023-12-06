
import UserTableRow from "@/components/UserTableRow";
import React from "react";

export default function page() {
  return (
    <>
      <header>
        <h2 className="text-2xl font-bold text-orange-500">
          Listar de Usuarios
        </h2>
        <p>Aqui voce pode visualizar e listar seus usuarios registaados</p>
      </header>

      <section className="mt-8">
        <p>Usuarios totais: 20</p>

        <table className="w-full">
          <thead className="bg-zinc-700 text-white">
            <tr className="text-left">
            <th></th>
            <th className="p-2">Nome</th>
            <th>Email</th>
            <th>Função</th>
            <th>Idade</th>
            <th>Genero</th>
            <th>Telefone</th>
            <th>Acoes</th>
            </tr>
          </thead>
          <tbody>
            <UserTableRow i={1}/>
            <UserTableRow i={2}/>
            <UserTableRow i={3}/>
            <UserTableRow i={4}/>
            <UserTableRow i={5}/>
            <UserTableRow i={6}/>
          </tbody>
        </table>
      </section>
    </>
  );
}
