import "dotenv/config";

import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { defineConfig } from "prisma/config";
import path from "node:path";

type Env = {
  TURSO_DATABASE_URL: string;
  TURSO_AUTH_TOKEN: string;
};

export default defineConfig<Env>({
  earlyAccess: true,
  schema: path.join("prisma", "schema.prisma"),

  migrate: {
    async adapter(env: Env) {
      return new PrismaLibSQL({
        url: env.TURSO_DATABASE_URL,
        authToken: env.TURSO_AUTH_TOKEN,
      });
    },
  },
});
