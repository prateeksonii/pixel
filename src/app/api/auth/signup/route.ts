import { NextResponse } from "next/server";
import argon2 from "argon2";
import { ISignupValidator } from "@/app/validators/SignupValidator";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  const data: ISignupValidator = await request.json();

  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existingUser) {
    return NextResponse.json(
      {
        ok: false,
        message: "User already exists",
      },
      {
        status: 409,
      }
    );
  }

  const hashedPassword = await argon2.hash(data.password);

  await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
    },
  });

  return NextResponse.json(
    {
      ok: true,
    },
    {
      status: 201,
    }
  );
}
