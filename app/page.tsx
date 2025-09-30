import prisma from "../lib/prisma.ts";

export default async function Home() {
  const dinos = await prisma.dino.findMany();
  console.log(dinos);
  return (
    <div className="h-screen flex items-center justify-center text-white">
      <h1>Dinosaurs</h1>
      {dinos.map((dino) => (
        <div key={dino.id}>{dino.name}</div>
      ))}
    </div>
  );
}
