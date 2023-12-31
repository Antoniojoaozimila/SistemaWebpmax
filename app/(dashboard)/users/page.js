
import PageHeader from "@/components/PageHeader";
import UserTableRow from "@/components/UserTableRow";
import React from "react";

export default function page() {
  return (
    <>
     <PageHeader title="Listar de Usuarios Registados no Sistema">
     Aqui voce pode visualizar todos  usuarios registados no sistema
     </PageHeader>

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
