import prisma from "../../../lib/prisma.ts";

export async function GET() {
  const dinos = await prisma.dino.findMany();

  return Response.json(dinos);
}
