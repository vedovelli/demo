import type { Route } from "./+types/transactions";
import { TransactionForm } from "~/features/transactions/form";
import { Transactions } from "~/features/transactions/transactions";
import { getTransactions } from "~/features/transactions/api";
import prisma from "prisma/prisma";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const data = {
    created_at: new Date(),
    description: formData.get("description") as string,
    amount: Number(formData.get("amount")),
  };

  await prisma.transaction.create({
    data,
  });
}

export async function loader() {
  return {
    transactions: await getTransactions(),
  };
}

export default function () {
  return (
    <section className="grid grid-cols-2 gap-8">
      <TransactionForm />
      <Transactions />
    </section>
  );
}
