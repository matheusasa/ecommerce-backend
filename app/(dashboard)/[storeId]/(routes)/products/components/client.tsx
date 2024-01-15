"use client"

import { Button } from "@/components/ui/button"
import Heading from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { ProductsColumn, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"

interface ProductsClientProps{
    data:ProductsColumn[]
}

export const ProductsClient :React.FC<ProductsClientProps>= ({
    data
}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Produtos(${data.length})`}
                    description="Gerencie os produtos da sua loja." />
                <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Adicionar Novo
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="name" columns={columns} data ={data}/>
            <Heading title="API" description="API para chamar os Produtos"/>
            <Separator/>
            <ApiList entityName="products" entityIdName="productId"/>
        </>
    )
}