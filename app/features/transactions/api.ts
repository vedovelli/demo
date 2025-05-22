import prisma from "prisma/prisma";

export async function getTransactions() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return await prisma.transaction.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
}
