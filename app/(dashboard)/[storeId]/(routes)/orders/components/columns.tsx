"use client"

import { ColumnDef } from "@tanstack/react-table"


export type OrderColumn = {
  id: string
  address: string
  isPaid:boolean
  totalPrice:string
  products:string
  phone: string
  createdAt:string

}

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "products",
    header: "Produtos",
  },
  {
    accessorKey: "phone",
    header: "Telefone",
  },
  {
    accessorKey: "address",
    header: "Endereco",
  },
  {
    accessorKey: "totalPrice",
    header: "Preco total",
  },
  {
    accessorKey: "isPaid",
    header: "Pago",
  },
  {
    accessorKey: "createdAt",
    header: "Data",
  },
]
