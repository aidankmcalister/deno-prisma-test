import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  migrations: {
    seed: `deno run -A --env prisma/seed.ts`,
  },
});
