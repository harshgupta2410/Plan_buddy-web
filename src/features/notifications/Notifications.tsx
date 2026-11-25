import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { notificationsApi } from "../../services/endpoints";
import { Card, Empty, Loading } from "../../components/ui";
export default function Notifications() {
  const qc = useQueryClient();
  const q = useQuery({ queryKey: ["notifications"], queryFn: notificationsApi.list });
  const read = useMutation({ mutationFn: notificationsApi.markRead, onSuccess: () => qc.invalidateQueries({ queryKey: ["notifications"] }) });
  if (q.isLoading) return <Loading />;
  return (<><h1>Notifications</h1>{!q.data?.length ? <Empty text="You’re all caught up." /> :
    q.data.map(n => <Card key={n.id}><span style={{ fontWeight: n.read ? 400 : 700 }}>{n.text}</span> {!n.read && <button className="btn secondary" onClick={() => read.mutate(n.id)}>Mark read</button>}</Card>)}</>);
}
