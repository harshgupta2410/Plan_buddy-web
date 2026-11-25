// TODO: align every type with the backend OpenAPI contract. Do not invent fields.
export interface User { id: string; name: string; phone?: string; email?: string; photoUrl?: string }
export interface Group { id: string; name: string; description?: string; imageUrl?: string; memberCount: number; role?: "owner" | "admin" | "member" }
export type PlanStatus = "Planning" | "Confirmed" | "Completed" | "Cancelled";
export const PLAN_CATEGORIES = ["Trip","Outing","Party","Dinner","Movie","Birthday","College Event","Other"] as const;
export interface Plan { id: string; groupId: string; title: string; category: string; description?: string; date?: string; startTime?: string; endTime?: string; location?: string; status: PlanStatus; creatorId: string }
export interface PollOption { id: string; text: string; votes: number }
export interface Poll { id: string; question: string; options: PollOption[]; closed: boolean; myVoteOptionId?: string }
export interface ChecklistItem { id: string; text: string; done: boolean; assigneeId?: string; completedById?: string }
/** Amounts are integer paise. Balances come from the backend. */
export interface Expense { id: string; title: string; amountPaise: number; paidById: string; participantIds: string[] }
export interface Balance { userId: string; netPaise: number }
export interface Notification { id: string; text: string; read: boolean; createdAt: string }
