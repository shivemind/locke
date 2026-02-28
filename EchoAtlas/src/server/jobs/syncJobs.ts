import { CronJob } from 'cron';
import { fetchOutreachOpportunities, generateOutreachDrafts } from '../services/botService';
import { saveDraftsToDatabase } from '../lib/db/prisma';

const syncOutreachJobs = () => {
  const job = new CronJob('0 15 * * *', async () => {
    try {
      const opportunities = await fetchOutreachOpportunities();
      const drafts = await generateOutreachDrafts(opportunities);
      await saveDraftsToDatabase(drafts);
      console.log('Outreach jobs synced successfully.');
    } catch (error) {
      console.error('Error syncing outreach jobs:', error);
    }
  });

  job.start();
};

export default syncOutreachJobs;