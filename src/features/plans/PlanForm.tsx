import { useParams } from "react-router-dom";
export default function PlanForm() {
  const params = useParams();
  return <><h1>PlanForm</h1><p className="muted">TODO: React Hook Form + zod: title, category, description, date, time, location, group (params: {JSON.stringify(params)})</p></>;
}
