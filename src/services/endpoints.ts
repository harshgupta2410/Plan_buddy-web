import { api } from "./apiClient";
import type { Group, Plan, Poll, ChecklistItem, Expense, Balance, Notification, User } from "../types";
// TODO: replace every path/payload with the real OpenAPI contract agreed with the backend developer.
export const usersApi = { me: () => api.get<User>("/users/me").then(r => r.data), update: (b: Partial<User>) => api.patch<User>("/users/me", b).then(r => r.data) };
export const groupsApi = {
  list: () => api.get<Group[]>("/groups").then(r => r.data),
  get: (id: string) => api.get<Group>(`/groups/${id}`).then(r => r.data),
  create: (b: { name: string; description?: string }) => api.post<Group>("/groups", b).then(r => r.data),
  join: (code: string) => api.post<Group>("/groups/join", { code }).then(r => r.data),
  leave: (id: string) => api.post(`/groups/${id}/leave`),
};
export const plansApi = {
  list: () => api.get<Plan[]>("/plans").then(r => r.data),
  get: (id: string) => api.get<Plan>(`/plans/${id}`).then(r => r.data),
  create: (b: Partial<Plan>) => api.post<Plan>("/plans", b).then(r => r.data),
  update: (id: string, b: Partial<Plan>) => api.patch<Plan>(`/plans/${id}`, b).then(r => r.data),
  remove: (id: string) => api.delete(`/plans/${id}`),
};
export const pollsApi = {
  list: (planId: string) => api.get<Poll[]>(`/plans/${planId}/polls`).then(r => r.data),
  create: (planId: string, b: { question: string; options: string[] }) => api.post<Poll>(`/plans/${planId}/polls`, b).then(r => r.data),
  vote: (pollId: string, optionId: string) => api.post(`/polls/${pollId}/vote`, { optionId }),
  close: (pollId: string) => api.post(`/polls/${pollId}/close`),
};
export const checklistApi = {
  list: (planId: string) => api.get<ChecklistItem[]>(`/plans/${planId}/checklist`).then(r => r.data),
  add: (planId: string, b: { text: string; assigneeId?: string }) => api.post<ChecklistItem>(`/plans/${planId}/checklist`, b).then(r => r.data),
  toggle: (itemId: string, done: boolean) => api.patch(`/checklist/${itemId}`, { done }),
  remove: (itemId: string) => api.delete(`/checklist/${itemId}`),
};
export const expensesApi = {
  list: (planId: string) => api.get<Expense[]>(`/plans/${planId}/expenses`).then(r => r.data),
  add: (planId: string, b: Omit<Expense, "id">) => api.post<Expense>(`/plans/${planId}/expenses`, b).then(r => r.data),
  balances: (planId: string) => api.get<Balance[]>(`/plans/${planId}/balances`).then(r => r.data),
};
export const notificationsApi = {
  list: () => api.get<Notification[]>("/notifications").then(r => r.data),
  markRead: (id: string) => api.post(`/notifications/${id}/read`),
};
