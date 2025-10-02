import { Prisma, PrismaClient } from "../app/generated/prisma/client.ts";
import process from "node:process";

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

const dinosaurNames = [
  "Tyrannosaurus",
  "Velociraptor",
  "Triceratops",
  "Stegosaurus",
  "Brachiosaurus",
  "Pterodactyl",
  "Ankylosaurus",
  "Dilophosaurus",
  "Spinosaurus",
  "Parasaurolophus",
  "Apatosaurus",
  "Allosaurus",
  "Compsognathus",
  "Gallimimus",
  "Iguanodon",
  "Megalosaurus",
  "Oviraptor",
  "Plesiosaurus",
  "Quetzalcoatlus",
  "Styracosaurus",
  "Therizinosaurus",
  "Troodon",
  "Utahraptor",
  "Carnotaurus",
];

async function seed() {
  const dinosaurData: Prisma.DinoCreateInput[] = dinosaurNames.map((name) => ({
    name,
  }));

  await prisma.dino.deleteMany();

  for (const u of dinosaurData) {
    await prisma.dino.create({
      data: u,
    });
  }
  console.log(`Seeding finished.`);
}

seed();

await prisma.$disconnect();
