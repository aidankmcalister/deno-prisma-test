import { Prisma, PrismaClient } from "../app/generated/prisma/client.ts";

const prisma = new PrismaClient({
  datasourceUrl: Deno.env.get("DATABASE_URL"),
});

const dinosaurData: Prisma.DinoCreateInput[] = [
  {
    name: "Aardonyx",
  },
  {
    name: "Abelisaurus",
  },
  {
    name: "Acanthopholis",
  },
];

for (const u of dinosaurData) {
  const dinosaur = await prisma.dino.create({
    data: u,
  });
  console.log(`Created dinosaur with id: ${dinosaur.id}`);
}
console.log(`Seeding finished.`);

await prisma.$disconnect();

// function main() {
//   console.log("Hello world");
// }

// main();
