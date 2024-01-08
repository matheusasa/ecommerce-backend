"use client"

import { ColumnDef } from "@tanstack/react-table"


export type BillboardsColumn = {
  id: string
  label: string
  createdAt:string

}

export const columns: ColumnDef<BillboardsColumn>[] = [
  {
    accessorKey: "label",
    header: "label",
  },
  {
    accessorKey: "createdAt",
    header: "Data",
  },
]
