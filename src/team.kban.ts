import { Team } from 'kaibanjs';
import { researcher } from './agents/researcher';
import { analyst } from './agents/analyst';
import { researchTask } from './tasks/researchTask';
import { analysisTask } from './tasks/analysisTask';

const team = new Team({
    name: 'Company Financial Research Team',
    agents: [researcher, analyst],
    tasks: [researchTask, analysisTask],
    inputs: {
        company: 'Apple'
    },
    env: {
        GOOGLE_API_KEY: import.meta.env.VITE_GOOGLE_API_KEY || 'YOUR_GOOGLE_API_KEY_HERE'
    }
});

export default team;
