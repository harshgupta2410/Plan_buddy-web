import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { groupsApi, plansApi } from "../../services/endpoints";
import { Card, Empty, ErrorState, Loading } from "../../components/ui";
import { formatDate } from "../../utils/format";
export default function Dashboard() {
  const plans = useQuery({ queryKey: ["plans"], queryFn: plansApi.list });
  const groups = useQuery({ queryKey: ["groups"], queryFn: groupsApi.list });
  return (<>
    <h1>Dashboard</h1>
    <Link className="btn" to="/app/groups/new">New Group</Link> <Link className="btn secondary" to="/app/plans/new">New Plan</Link>
    <h2>Upcoming plans</h2>
    {plans.isLoading ? <Loading /> : plans.error ? <ErrorState error={plans.error} retry={() => plans.refetch()} /> : !plans.data?.length ? <Empty text="No plans yet." /> :
      <div className="grid">{plans.data.map(p => <Link key={p.id} to={`/app/plans/${p.id}`}><Card><b>{p.title}</b><p className="muted">{formatDate(p.date)} · {p.location}</p></Card></Link>)}</div>}
    <h2>My groups</h2>
    {groups.isLoading ? <Loading /> : !groups.data?.length ? <Empty text="You’re not in any group yet." /> :
      <div className="grid">{groups.data.map(g => <Link key={g.id} to={`/app/groups/${g.id}`}><Card><b>{g.name}</b><p className="muted">{g.memberCount} members</p></Card></Link>)}</div>}
  </>);
}
