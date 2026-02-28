import { describe, it, expect } from 'vitest';
import { fetchOutreachOpportunities, generateOutreachDrafts } from '../../src/features/evangelist-bot/services/botService';
import { OutreachOpportunity, OutreachDraft } from '@prisma/client';
import { prisma } from '../../src/lib/db/prisma';

describe('EvangelistBot Integration Tests', () => {
  it('should fetch outreach opportunities from public APIs', async () => {
    const opportunities: OutreachOpportunity[] = await fetchOutreachOpportunities();
    expect(opportunities).toBeInstanceOf(Array);
    expect(opportunities.length).toBeGreaterThan(0);
    opportunities.forEach(opportunity => {
      expect(opportunity).toHaveProperty('id');
      expect(opportunity).toHaveProperty('title');
      expect(opportunity).toHaveProperty('url');
      expect(opportunity).toHaveProperty('source');
    });
  });

  it('should generate outreach drafts based on opportunities', async () => {
    const opportunities: OutreachOpportunity[] = await fetchOutreachOpportunities();
    const drafts: OutreachDraft[] = await generateOutreachDrafts(opportunities);
    expect(drafts).toBeInstanceOf(Array);
    expect(drafts.length).toBeGreaterThan(0);
    drafts.forEach(draft => {
      expect(draft).toHaveProperty('id');
      expect(draft).toHaveProperty('opportunityId');
      expect(draft).toHaveProperty('draftText');
      expect(draft).toHaveProperty('confidence');
    });
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });
});