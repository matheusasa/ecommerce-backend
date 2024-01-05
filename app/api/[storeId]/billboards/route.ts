import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: { params: { storeId: string } }) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { label, imageUrl } = body;

        if (!userId) {
            return new NextResponse("Não autorizado", { status: 401 })

        }
        // Verificar se o usuário tem permissão para criar um novo nome
        if (!label) {
            return new NextResponse('Campo obrigatório não preenchido', { status: 400 })
        }
        if (!imageUrl) {
            return new NextResponse('ImageUrl não preenchido', { status: 400 })
        }
        if (!params.storeId) {
            return new NextResponse('StoreId não preenchido', { status: 400 })
        }
        const storeByUserId = await prismadb.store.findFirst({
            where: {
                id: params.storeId,
                userId
            }
        });

        if (!storeByUserId) {
            return new NextResponse('Você não possui esse negócio', { status: 400 })
        }



        const billboard = await prismadb.billBoard.create({
            data: {
                label,
                imageUrl,
                storeId: params.storeId
            }

        });

        return NextResponse.json(billboard);
    } catch (error) {
        console.log(`[BILLBOARD_POST]`, error);
        return new NextResponse("Erro interno", { status: 500 });
    }

}
export async function GET(req: Request, { params }: { params: { storeId: string } }) {
    try {

        if (!params.storeId) {
            return new NextResponse('StoreId não preenchido', { status: 400 })
        }


        const billboards = await prismadb.billBoard.findMany({
            where: {
                storeId: params.storeId
            }

        });

        return NextResponse.json(billboards);
    } catch (error) {
        console.log(`[BILLBOARD_GET ]`, error);
        return new NextResponse("Erro interno", { status: 500 });
    }

}