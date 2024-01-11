"use client"

import { Button } from "@/components/ui/button"
import Heading from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { BillboardsColumn, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"

interface BillboardClientProps{
    data:BillboardsColumn[]
}

export const BillboardClient :React.FC<BillboardClientProps>= ({
    data
}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Billboards(${data.length})`}
                    description="Gerencie os billboards para sua loja." />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Adicionar Novo
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="label" columns={columns} data ={data}/>
            
        </>
    )
}