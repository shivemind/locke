import { describe, it, expect, beforeEach } from 'vitest';
import { createBot } from '../../src/features/evangelist-bot/services/botService';

describe('EvangelistBot', () => {
  let bot;

  beforeEach(() => {
    bot = createBot();
  });

  it('should initialize with default settings', () => {
    expect(bot.settings).toHaveProperty('language', 'en');
    expect(bot.settings).toHaveProperty('maxTokens', 150);
  });

  it('should fetch outreach opportunities', async () => {
    const opportunities = await bot.fetchOpportunities();
    expect(Array.isArray(opportunities)).toBe(true);
    expect(opportunities.length).toBeGreaterThan(0);
  });

  it('should generate outreach drafts', async () => {
    const opportunity = {
      title: 'Sample Opportunity',
      url: 'https://example.com',
      score: 85,
    };
    const draft = await bot.generateDraft(opportunity);
    expect(draft).toHaveProperty('draftText');
    expect(draft).toHaveProperty('confidence');
    expect(draft.confidence).toBeGreaterThan(0);
  });

  it('should validate drafts using Zod', async () => {
    const draft = {
      kind: 'email',
      draftText: 'Hello, this is a draft.',
      confidence: 90,
    };
    const isValid = await bot.validateDraft(draft);
    expect(isValid).toBe(true);
  });
});