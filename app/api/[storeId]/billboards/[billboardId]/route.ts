import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export async function GET(
    req: Request,
    { params }: { params: { billboardId: string } }
) {
    try {


        if (!params.billboardId) {
            return new NextResponse("Store id is required", { status: 400 });
        }


        const billBoard = await prismadb.billBoard.findUnique({
            where: {
                id: params.billboardId,

            }
        });

        return NextResponse.json(billBoard);
    } catch (error) {
        console.log('[BILLBOARD_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};

export async function PATCH(
    req: Request,
    { params }: { params: { storeId: string, billboardId: string } }
) {
    try {
        const { userId } = auth();
        const body = await req.json();

        const { label, imageUrl } = body;

        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 403 });
        }

        if (!label) {
            return new NextResponse("Campo obrigatório não preenchido", { status: 400 });
        }
        if (!imageUrl) {
            return new NextResponse("Imagem obrigatório não preenchido", { status: 400 });
        }

        if (!params.billboardId) {
            return new NextResponse("billboard id is required", { status: 400 });
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

        const billboard = await prismadb.billBoard.updateMany({
            where: {
                id: params.billboardId,
            },
            data: {
                label, imageUrl
            }
        });

        return NextResponse.json(billboard);
    } catch (error) {
        console.log('[BILLBOARD_PATCH]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};

export async function DELETE(
    req: Request,
    { params }: { params: { storeId: string, billboardId: string } }
) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 403 });
        }

        if (!params.billboardId) {
            return new NextResponse("Store id is required", { status: 400 });
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

        const billBoard = await prismadb.billBoard.deleteMany({
            where: {
                id: params.billboardId,

            }
        });

        return NextResponse.json(billBoard);
    } catch (error) {
        console.log('[BILLBOARD_DELETE]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};  