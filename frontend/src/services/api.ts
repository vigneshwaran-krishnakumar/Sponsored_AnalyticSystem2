import { campaigns, influencers, dashboardMetrics, type Campaign, type Influencer, type DashboardMetrics } from "@/data/mockData";

const delay = (ms: number = 300) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  async getCampaigns(): Promise<Campaign[]> {
    await delay();
    return campaigns;
  },

  async getCampaignById(id: string): Promise<Campaign | undefined> {
    await delay(200);
    return campaigns.find((c) => c.id === id);
  },

  async getInfluencers(): Promise<Influencer[]> {
    await delay();
    return influencers;
  },

  async getDashboardMetrics(): Promise<DashboardMetrics> {
    await delay(400);
    return dashboardMetrics;
  },

  async getInfluencersByCampaign(campaignId: string): Promise<Influencer[]> {
    await delay(200);
    const campaign = campaigns.find((c) => c.id === campaignId);
    if (!campaign) return [];
    return influencers.filter((i) => campaign.influencerIds.includes(i.id));
  },
};
