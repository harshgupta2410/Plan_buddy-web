import { useParams } from "react-router-dom";
export default function ChecklistTab() {
  const params = useParams();
  return <><h1>ChecklistTab</h1><p className="muted">TODO: add/complete/edit/delete items (checklistApi) (params: {JSON.stringify(params)})</p></>;
}
