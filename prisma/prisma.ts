import "dotenv/config";

import { PrismaClient } from "../app/generated/prisma";
import { PrismaLibSQL } from "@prisma/adapter-libsql";

declare global {
  var prismaClient: PrismaClient;
}

const adapter = new PrismaLibSQL({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`,
});

globalThis.prismaClient ??= new PrismaClient({ adapter });

const prisma = globalThis.prismaClient;

export default prisma;
