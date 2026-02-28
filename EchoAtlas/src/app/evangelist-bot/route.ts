import { NextResponse } from 'next/server';
import { botService } from '@/features/evangelist-bot/services/botService';

export async function GET(request: Request) {
    try {
        const opportunities = await botService.fetchOutreachOpportunities();
        return NextResponse.json(opportunities);
    } catch (error) {
        return NextResponse.error();
    }
}

export async function POST(request: Request) {
    const data = await request.json();
    try {
        const draft = await botService.createOutreachDraft(data);
        return NextResponse.json(draft, { status: 201 });
    } catch (error) {
        return NextResponse.error();
    }
}