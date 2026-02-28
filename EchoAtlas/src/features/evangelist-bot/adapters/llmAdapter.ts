import { OpenAI } from 'lib/llm/providers/openai';
import { OutreachOpportunity, OutreachDraft } from 'prisma/schema';
import { z } from 'zod';

const openAIClient = new OpenAI();

export const generateOutreachDraft = async (opportunity: OutreachOpportunity) => {
    const prompt = `Create an outreach draft for the opportunity titled "${opportunity.title}" with the following details: ${JSON.stringify(opportunity)}`;
    
    const response = await openAIClient.generate(prompt);
    
    const draftSchema = z.object({
        draftText: z.string(),
        callToAction: z.string().nullable(),
        confidence: z.number().min(0).max(100),
    });

    const validatedDraft = draftSchema.parse(response);

    const outreachDraft: OutreachDraft = {
        opportunityId: opportunity.id,
        kind: 'email',
        draftText: validatedDraft.draftText,
        callToAction: validatedDraft.callToAction,
        confidence: validatedDraft.confidence,
        createdAt: new Date(),
    };

    return outreachDraft;
};