import prismadb from "@/lib/prismadb"

export const getprodinstock = async (storeId: string) =>{
    const getprodinstock = await prismadb.product.count({
        where: {
            storeId,
            isArchived: false
        },
    });
    
    return getprodinstock;
}