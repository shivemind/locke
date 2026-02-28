import { OutreachOpportunity, OutreachDraft } from '../adapters/llmAdapter';
import { z } from 'zod';
import { prisma } from '../../lib/db/prisma';

const outreachOpportunitySchema = z.object({
  source: z.enum(['hn', 'github', 'devto']),
  title: z.string(),
  url: z.string().url(),
  author: z.string().nullable(),
  score: z.number().int(),
  reason: z.string(),
  matchedQuery: z.string(),
  status: z.enum(['NEW', 'REVIEWED', 'POSTED', 'SKIPPED']).default('NEW'),
  postedUrl: z.string().nullable(),
  notes: z.string().nullable(),
});

const outreachDraftSchema = z.object({
  opportunityId: z.string(),
  kind: z.string(),
  draftText: z.string(),
  callToAction: z.string().nullable(),
  confidence: z.number().int().min(0).max(100),
});

export const createOutreachOpportunity = async (data) => {
  const parsedData = outreachOpportunitySchema.parse(data);
  return await prisma.outreachOpportunity.create({
    data: parsedData,
  });
};

export const createOutreachDraft = async (data) => {
  const parsedData = outreachDraftSchema.parse(data);
  return await prisma.outreachDraft.create({
    data: parsedData,
  });
};

export const fetchOutreachOpportunities = async () => {
  return await prisma.outreachOpportunity.findMany();
};

export const fetchOutreachDrafts = async (opportunityId) => {
  return await prisma.outreachDraft.findMany({
    where: { opportunityId },
  });
};