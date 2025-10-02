"use client";

import { Dino } from "./generated/prisma/client.ts";
import { useEffect, useState } from "react";

export default function Home() {
  const [dinos, setDinos] = useState<Dino[]>([]);

  useEffect(() => {
    const fetchDinos = async () => {
      const response = await fetch("/api/dinos");
      const data = await response.json();
      setDinos(data);
    };

    fetchDinos();
  }, []);

  return (
    <div>
      <h1 className="text-2xl mb-2 w-full text-center">Dinosaurs</h1>
      <ul className="grid grid-cols-2 gap-2">
        {dinos.map((dino) => (
          <li
            className="p-3 text-center rounded-md bg-neutral-900"
            key={dino.id}
          >
            {dino.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
