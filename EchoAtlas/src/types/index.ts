export type OutreachOpportunity = {
  id: string;
  source: 'hn' | 'github' | 'devto';
  title: string;
  url: string;
  author?: string;
  score: number;
  reason: string;
  matchedQuery: string;
  status: 'NEW' | 'REVIEWED' | 'POSTED' | 'SKIPPED';
  postedUrl?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type OutreachDraft = {
  id: string;
  opportunityId: string;
  kind: string;
  draftText: string;
  callToAction?: string;
  confidence: number; // 0-100
  createdAt: Date;
};