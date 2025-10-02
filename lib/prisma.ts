import { PrismaClient } from "../app/generated/prisma/client.ts";
import process from "node:process";

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

export default prisma;
