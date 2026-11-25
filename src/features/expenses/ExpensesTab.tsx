import { useParams } from "react-router-dom";
export default function ExpensesTab() {
  const params = useParams();
  return <><h1>ExpensesTab</h1><p className="muted">TODO: expense form + backend-calculated balances (expensesApi); amounts as integer paise (params: {JSON.stringify(params)})</p></>;
}
