"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"


export type BillboardsColumn = {
  id: string
  label: string
  createdAt:string

}

export const columns: ColumnDef<BillboardsColumn>[] = [
  {
    accessorKey: "label",
    header: "Label",
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
