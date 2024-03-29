"use client"

import { Button } from "@/components/ui/button"
import Heading from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { OrderColumn, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"

interface OrderClientProps{
    data:OrderColumn[]
}

export const OrderClient :React.FC<OrderClientProps>= ({
    data
}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Pedidos(${data.length})`}
                    description="Gerencie os pedidos da sua loja." />
            </div>
            <Separator />
            <DataTable searchKey="products" columns={columns} data ={data}/>
        </>
    )
}