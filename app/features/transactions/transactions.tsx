import type { loader } from "~/routes/transactions";
import { useLoaderData } from "react-router";

export function Transactions() {
  const { transactions } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Transações</h1>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.description} - {t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
