import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export function databaseIsConfigured() {
  const databaseUrl = process.env.DATABASE_URL;
  const directUrl = process.env.DIRECT_URL;
  if (!databaseUrl || !directUrl) return false;
  if (databaseUrl.includes("HOST.neon.tech") || databaseUrl.includes("USER:PASSWORD")) return false;
  if (directUrl.includes("HOST.neon.tech") || directUrl.includes("USER:PASSWORD")) return false;
  return true;
}
