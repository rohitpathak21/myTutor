import bcrypt from "bcrypt"
import prisma from '../../libs/prismadb'
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const{
        email,
        name,
        gender,
        age,
        phone,
        password,
    } =body;
     const hashedPassword = await bcrypt.hash(password,12);

     const user = await prisma.user.create({
        data: {
            email,
            name,
            gender,
            age,
            phone,
            hashedPassword,
        }

     });
     return NextResponse.json(user);
}