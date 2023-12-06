import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function ProductsTableRow({i}) {
  return (
    <tr data-index={i % 2} className="bg-zinc-300
    data-[index='0']:bg-zinc-100">
      <td>{i}.</td>
      <td className="p-2">Cadillac Scalade</td>
      <td>antonio.zimila@uem.ac.mz</td>
      <td>Programador</td>
      <td>24</td>
      <td>M</td>
      <td>845625067</td>
      <td className="flex gap-2 p-2">
        <Link
          className="bg-sky-500 w-8 h-8 rounded-md text-zinc-900 hover:bg-sky-600 transition-all p-1"
          href="/useres/antonio.zimila@uem.ac.mz"
        >
          <FontAwesomeIcon className="w-5" icon={faPencil} />
        </Link>
        <button className="bg-red-500 w-8 h-8 rounded-md text-zinc-900 hover:bg-red-600 transition-all p-1">
          <FontAwesomeIcon className="w-4" icon={faTrash} />
        </button>
      </td>
    </tr>
  )
}

