export type ServiceProviderType = "official" | "partner" | "thirdParty";

export type ServiceLinkType = "internal" | "external";

export interface PreviewHighlightItem {
  dimension: string;
  score?: string;
  detail: string;
}

export interface ServicePreviewData {
  sampleReportTitle: string;
  overviewSummary: string;
  suitableFor: string[];
  requiredInputs: string[];
  dimensions: PreviewHighlightItem[];
  sampleTakeaway: string;
  faq?: Array<{ q: string; a: string }>;
}

export interface FengShuiService {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  category: string;
  categoryLabel: string;
  tags: string[];
  icon: string;
  accentColor: string;
  accentRgb: string;
  hoverBackground: string;
  providerName: string;
  providerType: ServiceProviderType;
  targetUrl: string;
  linkType: ServiceLinkType;
  requiresRegistration: boolean;
  status: "active" | "comingSoon";
  featured: boolean;
  sortOrder: number;
  ctaLabel: string;
  badges?: string[];
  highlights?: string[];
  estimatedTime?: string;
  scenarioIds?: string[];
  rating?: string;
  usageCount?: string;
  previewData?: ServicePreviewData;
}
