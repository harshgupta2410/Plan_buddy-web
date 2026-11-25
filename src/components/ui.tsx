import type { ReactNode } from "react";
export const Card = ({ children }: { children: ReactNode }) => <div className="card">{children}</div>;
export const Badge = ({ children }: { children: ReactNode }) => <span className="badge">{children}</span>;
export const Loading = () => <p className="muted">Loading…</p>;
export const Empty = ({ text }: { text: string }) => <Card><span className="muted">{text}</span></Card>;
export const ErrorState = ({ error, retry }: { error: any; retry?: () => void }) => (
  <Card>{error?.kind === "forbidden" ? "You don’t have access to this." : error?.kind === "network" ? "Network error." : "Something went wrong."} {retry && <button className="btn secondary" onClick={retry}>Retry</button>}</Card>
);
