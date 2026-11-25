import { useParams } from "react-router-dom";
export default function PollsTab() {
  const params = useParams();
  return <><h1>PollsTab</h1><p className="muted">TODO: create poll, vote, results, close (pollsApi) (params: {JSON.stringify(params)})</p></>;
}
