import { PrismaClient } from "../app/generated/prisma/client.ts";

const prisma = new PrismaClient({
  datasourceUrl: Deno.env.get("DATABASE_URL"),
});

export default prisma;
