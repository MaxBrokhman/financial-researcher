import { Task } from 'kaibanjs';
import { researcher } from '../agents/researcher';

export const researchTask = new Task({
    description: `Conduct thorough research on company {company}. Focus on:
    1. Current company status and health
    2. Historical company performance
    3. Major challenges and opportunities
    4. Recent news and events
    5. Future outlook and potential developments

    Make sure to organize your findings in a structured format with clear sections.`,
    expectedOutput: `A comprehensive research document with well-organized sections covering
    all the requested aspects of {company}. Include specific facts, figures,
    and examples where relevant.`,
    agent: researcher
});
