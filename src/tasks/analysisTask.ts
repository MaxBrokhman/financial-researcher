import { Task } from 'kaibanjs';
import { analyst } from '../agents/analyst';

export const analysisTask = new Task({
    description: `Analyze the research findings and create a comprehensive report on {company}.
    Your report should:
    1. Begin with an executive summary
    2. Include all key information from the research
    3. Provide insightful analysis of trends and patterns
    4. Offer a market outlook for company, noting that this should not be used for trading decisions
    5. Be formatted in a professional, easy-to-read style with clear headings`,
    expectedOutput: `A polished, professional report on {company} that presents the research
    findings with added analysis and insights. The report should be well-structured
    with an executive summary, main sections, and conclusion.`,
    agent: analyst
});
