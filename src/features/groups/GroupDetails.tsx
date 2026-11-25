import { useParams } from "react-router-dom";
export default function GroupDetails() {
  const params = useParams();
  return <><h1>GroupDetails</h1><p className="muted">TODO: tabs: overview, members, plans, activity; invite copy; admin-only member management (params: {JSON.stringify(params)})</p></>;
}
