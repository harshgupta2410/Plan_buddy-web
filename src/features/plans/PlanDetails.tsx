import { useParams } from "react-router-dom";
export default function PlanDetails() {
  const params = useParams();
  return <><h1>PlanDetails</h1><p className="muted">TODO: header + tabs: overview, participants, polls, checklist, expenses; permission-based edit/delete (params: {JSON.stringify(params)})</p></>;
}
