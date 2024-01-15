"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"


export type ProductsColumn = {
  id: string
  name: string
  price: string
  category: string
  size: string
  color: string
  isFeatured: boolean
  isArchived: boolean
  createdAt:string

}

export const columns: ColumnDef<ProductsColumn>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "isArchived",
    header: "Arquivado",
  },
  {
    accessorKey: "isFeatured",
    header: "Lancamento",
  },
  {
    accessorKey: "price",
    header: "Preco",
  },
  {
    accessorKey: "category",
    header: "Categorias",
  },
  {
    accessorKey: "size",
    header: "Tamanho",
  },
  {
    accessorKey: "color",
    header: "Cor",
    cell: ({row}) =>{
      <div className="flex items center gap-x-2">
        {row.original.color}
        <div 
        className="h-6 w-6 rounded-full border"
        style={{backgroundColor: row.original.color}}>

        </div>

      </div>
    }
  },
  {
    accessorKey: "createdAt",
    header: "Data",
  },
  {
    id:"Actions",
    cell:({row}) =><CellAction data={row.original}/>
  }
]
