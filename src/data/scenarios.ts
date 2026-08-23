export interface Scenario {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  gradient: string;
  accentColor: string;
  recommendedServiceId: string;
  tagline: string;
}

export const scenarios: Scenario[] = [
  {
    id: "wealth-career",
    title: "求财与事业",
    subtitle: "跳槽抉择 · 财位催旺 · 投资时机",
    icon: "TrendingUp",
    gradient: "linear-gradient(135deg, rgba(245, 166, 35, 0.15), rgba(16, 24, 32, 0.95))",
    accentColor: "#F5A623",
    recommendedServiceId: "career-wealth",
    tagline: "掌握流年财气与贵人方位",
  },
  {
    id: "name-astrology",
    title: "起名与改名",
    subtitle: "紫微易名 · 30秒名情财 · 能量打分",
    icon: "Sparkles",
    gradient: "linear-gradient(135deg, rgba(69, 178, 193, 0.18), rgba(16, 24, 32, 0.95))",
    accentColor: "#45B2C1",
    recommendedServiceId: "name-number",
    tagline: "AI 结合传统姓名学秒出深度报告",
  },
  {
    id: "relationship-love",
    title: "感情与婚恋",
    subtitle: "八字合婚 · 桃花走势 · 矛盾化解",
    icon: "HeartHandshake",
    gradient: "linear-gradient(135deg, rgba(239, 91, 135, 0.15), rgba(16, 24, 32, 0.95))",
    accentColor: "#EF5B87",
    recommendedServiceId: "relationship",
    tagline: "深度解析两性互动与缘分契机",
  },
  {
    id: "home-space",
    title: "居家与商铺风水",
    subtitle: "买房租房 · 动线吉凶 · 煞气化解",
    icon: "Building2",
    gradient: "linear-gradient(135deg, rgba(50, 191, 163, 0.15), rgba(16, 24, 32, 0.95))",
    accentColor: "#32BFA3",
    recommendedServiceId: "home-fengshui",
    tagline: "三元九运空间布局调理",
  },
  {
    id: "destiny-chart",
    title: "先天大运与排盘",
    subtitle: "子平八字 · 十年大运 · 趋吉避凶",
    icon: "Compass",
    gradient: "linear-gradient(135deg, rgba(138, 88, 255, 0.15), rgba(16, 24, 32, 0.95))",
    accentColor: "#8A58FF",
    recommendedServiceId: "bazi-chart",
    tagline: "探索先天命格与后天运势节律",
  },
];
