export const validateOutreachOpportunity = (data) => {
    const schema = z.object({
        id: z.string().cuid(),
        source: z.enum(["hn", "github", "devto"]),
        title: z.string(),
        url: z.string().url(),
        author: z.string().nullable(),
        score: z.number().int(),
        reason: z.string(),
        matchedQuery: z.string(),
        status: z.enum(["NEW", "REVIEWED", "POSTED", "SKIPPED"]).default("NEW"),
        postedUrl: z.string().nullable(),
        notes: z.string().nullable(),
        createdAt: z.date(),
        updatedAt: z.date(),
    });

    return schema.safeParse(data);
};

export const validateOutreachDraft = (data) => {
    const schema = z.object({
        id: z.string().cuid(),
        opportunityId: z.string().cuid(),
        kind: z.string(),
        draftText: z.string().min(1),
        callToAction: z.string().nullable(),
        confidence: z.number().int().min(0).max(100),
        createdAt: z.date(),
    });

    return schema.safeParse(data);
};