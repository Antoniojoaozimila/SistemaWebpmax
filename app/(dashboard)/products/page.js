import PageHeader from '@/components/PageHeader';
import ProductsTableRow from '@/components/ProductsTableRow';
import React from 'react';

export default function page() {
  return (
    <>
    <PageHeader title="Listar de produtos Registados no Sistema">
     Aqui voce pode visualizar todos  produtos registados no sistema
    </PageHeader>

      <section className="mt-8">
        <p>Produtos totais: 20</p>

        <table className="w-full">
          <thead className="bg-zinc-700 text-white">
            <tr className="text-left">
            <th></th>
            <th className="p-2">Nome</th>
            <th>Categoria</th>
            <th>Qtd</th>
            <th>Custo (Mzn)</th>
            <th>Custo Total</th>
            <th>Preco</th>
            <th>Acoes</th>
            </tr>
          </thead>
          <tbody>
           <ProductsTableRow i={1}/>
           <ProductsTableRow i={2}/>
           <ProductsTableRow i={3}/>
           <ProductsTableRow i={4}/>
          </tbody>
        </table>
      </section>

    </>
  )
}
