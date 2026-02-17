export interface Campaign {
  id: string;
  name: string;
  brand: string;
  status: "active" | "paused" | "completed";
  budget: number;
  spent: number;
  revenue: number;
  clicks: number;
  conversions: number;
  engagementRate: number;
  startDate: string;
  endDate: string;
  influencerIds: string[];
}

export interface Influencer {
  id: string;
  name: string;
  platform: string;
  followers: number;
  engagementRate: number;
  campaignCount: number;
  revenue: number;
  avatar: string;
}

export interface DashboardMetrics {
  totalRevenue: number;
  activeCampaigns: number;
  avgROI: number;
  engagementRate: number;
  revenueData: { month: string; revenue: number; target: number }[];
  trafficSources: { name: string; value: number }[];
  influencerPerformance: { name: string; revenue: number; engagement: number }[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
}

export const currentUser: User = {
  id: "u1",
  name: "Alex Rivera",
  email: "alex@sponsorlytics.io",
  avatar: "AR",
  role: "Admin",
};

export const campaigns: Campaign[] = [
  { id: "1", name: "Summer Boost 2024", brand: "Nike", status: "active", budget: 50000, spent: 32000, revenue: 78000, clicks: 45200, conversions: 3200, engagementRate: 4.8, startDate: "2024-06-01", endDate: "2024-08-31", influencerIds: ["1", "2", "3"] },
  { id: "2", name: "Tech Launch Q3", brand: "Samsung", status: "active", budget: 75000, spent: 48000, revenue: 112000, clicks: 62000, conversions: 4800, engagementRate: 5.1, startDate: "2024-07-15", endDate: "2024-09-30", influencerIds: ["2", "4", "5"] },
  { id: "3", name: "Fitness Challenge", brand: "Adidas", status: "completed", budget: 30000, spent: 28500, revenue: 65000, clicks: 38000, conversions: 2900, engagementRate: 6.2, startDate: "2024-03-01", endDate: "2024-05-31", influencerIds: ["1", "6"] },
  { id: "4", name: "Beauty Essentials", brand: "L'Oreal", status: "paused", budget: 40000, spent: 15000, revenue: 22000, clicks: 18000, conversions: 1200, engagementRate: 3.4, startDate: "2024-08-01", endDate: "2024-10-31", influencerIds: ["3", "7"] },
  { id: "5", name: "Gaming Stream", brand: "Razer", status: "active", budget: 60000, spent: 41000, revenue: 95000, clicks: 55000, conversions: 5100, engagementRate: 7.8, startDate: "2024-07-01", endDate: "2024-12-31", influencerIds: ["4", "5", "8"] },
  { id: "6", name: "Eco Living", brand: "Patagonia", status: "completed", budget: 25000, spent: 24000, revenue: 52000, clicks: 28000, conversions: 2100, engagementRate: 5.5, startDate: "2024-01-01", endDate: "2024-03-31", influencerIds: ["6", "7", "8"] },
];

export const influencers: Influencer[] = [
  { id: "1", name: "Sarah Johnson", platform: "Instagram", followers: 1200000, engagementRate: 5.2, campaignCount: 12, revenue: 145000, avatar: "SJ" },
  { id: "2", name: "Marcus Chen", platform: "YouTube", followers: 2800000, engagementRate: 4.8, campaignCount: 8, revenue: 198000, avatar: "MC" },
  { id: "3", name: "Ava Williams", platform: "TikTok", followers: 3500000, engagementRate: 7.1, campaignCount: 15, revenue: 220000, avatar: "AW" },
  { id: "4", name: "David Kim", platform: "YouTube", followers: 950000, engagementRate: 6.3, campaignCount: 6, revenue: 87000, avatar: "DK" },
  { id: "5", name: "Luna Martinez", platform: "Instagram", followers: 1800000, engagementRate: 5.9, campaignCount: 10, revenue: 165000, avatar: "LM" },
  { id: "6", name: "James Wright", platform: "TikTok", followers: 4200000, engagementRate: 8.4, campaignCount: 18, revenue: 310000, avatar: "JW" },
  { id: "7", name: "Emma Taylor", platform: "Instagram", followers: 780000, engagementRate: 4.1, campaignCount: 5, revenue: 62000, avatar: "ET" },
  { id: "8", name: "Ryan Park", platform: "YouTube", followers: 1500000, engagementRate: 5.6, campaignCount: 9, revenue: 132000, avatar: "RP" },
];

export const dashboardMetrics: DashboardMetrics = {
  totalRevenue: 482500,
  activeCampaigns: 8,
  avgROI: 247,
  engagementRate: 4.6,
  revenueData: [
    { month: "Jan", revenue: 28000, target: 30000 },
    { month: "Feb", revenue: 32000, target: 32000 },
    { month: "Mar", revenue: 38000, target: 35000 },
    { month: "Apr", revenue: 42000, target: 40000 },
    { month: "May", revenue: 35000, target: 42000 },
    { month: "Jun", revenue: 48000, target: 45000 },
    { month: "Jul", revenue: 52000, target: 48000 },
    { month: "Aug", revenue: 58000, target: 50000 },
    { month: "Sep", revenue: 45000, target: 52000 },
    { month: "Oct", revenue: 55000, target: 55000 },
    { month: "Nov", revenue: 62000, target: 58000 },
    { month: "Dec", revenue: 68000, target: 60000 },
  ],
  trafficSources: [
    { name: "Instagram", value: 42 },
    { name: "YouTube", value: 28 },
    { name: "TikTok", value: 18 },
    { name: "Twitter", value: 12 },
  ],
  influencerPerformance: [
    { name: "Sarah J.", revenue: 145000, engagement: 5.2 },
    { name: "Marcus C.", revenue: 198000, engagement: 4.8 },
    { name: "Ava W.", revenue: 220000, engagement: 7.1 },
    { name: "David K.", revenue: 87000, engagement: 6.3 },
    { name: "Luna M.", revenue: 165000, engagement: 5.9 },
    { name: "James W.", revenue: 310000, engagement: 8.4 },
  ],
};

export const campaignDailyData = [
  { day: "Mon", clicks: 1200, conversions: 85, spend: 1500 },
  { day: "Tue", clicks: 1800, conversions: 120, spend: 1800 },
  { day: "Wed", clicks: 1500, conversions: 95, spend: 1600 },
  { day: "Thu", clicks: 2200, conversions: 150, spend: 2000 },
  { day: "Fri", clicks: 2800, conversions: 190, spend: 2400 },
  { day: "Sat", clicks: 3200, conversions: 220, spend: 2800 },
  { day: "Sun", clicks: 2500, conversions: 170, spend: 2200 },
];

export const pricingPlans = [
  { name: "Starter", price: 29, features: ["Up to 5 campaigns", "Basic analytics", "3 influencer slots", "Email support", "Weekly reports"], highlighted: false },
  { name: "Pro", price: 79, features: ["Unlimited campaigns", "Advanced analytics", "25 influencer slots", "Priority support", "Real-time reports", "API access", "Custom dashboards"], highlighted: true },
  { name: "Enterprise", price: 199, features: ["Everything in Pro", "Unlimited influencers", "Dedicated account manager", "Custom integrations", "SLA guarantee", "White-label option", "Advanced API"], highlighted: false },
];

export const testimonials = [
  { name: "Jessica Lane", role: "Marketing Director, BrandCo", quote: "Sponsorlytics transformed how we track our influencer campaigns. ROI visibility went from guesswork to precision.", avatar: "JL" },
  { name: "Tom Bradley", role: "CEO, InfluencerHub", quote: "The real-time analytics and clean dashboard make it effortless to manage 50+ campaigns simultaneously.", avatar: "TB" },
  { name: "Priya Sharma", role: "Head of Partnerships, MediaWave", quote: "We reduced our campaign reporting time by 80%. The automated insights are a game-changer.", avatar: "PS" },
];

export const features = [
  { title: "Real-time Analytics", description: "Track campaign performance with live data updates and instant insights." },
  { title: "Influencer Management", description: "Manage your entire influencer network from one centralized dashboard." },
  { title: "ROI Tracking", description: "Measure exact return on investment for every sponsorship dollar spent." },
  { title: "Smart Reports", description: "Generate beautiful, shareable reports with one click." },
  { title: "Campaign Automation", description: "Automate repetitive tasks and focus on strategy." },
  { title: "Multi-platform", description: "Track performance across Instagram, YouTube, TikTok, and more." },
];
