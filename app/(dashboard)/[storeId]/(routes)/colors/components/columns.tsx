"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"


export type ColorColumn = {
  id: string
  name: string
  value:string
  createdAt:string

}

export const columns: ColumnDef<ColorColumn>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "value",
    header: "Valor",
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
