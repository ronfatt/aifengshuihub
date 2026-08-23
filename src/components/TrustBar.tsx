"use client";

import {
  BadgeCheck,
  BookOpen,
  Cpu,
  LockKeyhole,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

const methodology = [
  {
    icon: BookOpen,
    title: "四大学派古籍考据",
    description: "严谨考订紫微斗数、子平八字、三元九运与玄空飞星千年原典逻辑。",
  },
  {
    icon: Cpu,
    title: "现代高维 AI 算力",
    description: "大模型结合海量真实命例深度微调，提供秒级精准生成与针对性化解方案。",
  },
  {
    icon: LockKeyhole,
    title: "银行级隐私安全",
    description: "全流程匿名加密测算，测算数据绝不对外泄露，保障个人生辰信息绝对私密。",
  },
  {
    icon: BadgeCheck,
    title: "严选生态服务",
    description: "旗下所有矩阵工具均经过专业玄学顾问严格把关，持续迭代与精准优化。",
  },
];

const testimonials = [
  {
    quote: "使用紫微易名 30 秒就测完了，给出的名情财分析和我的性格特质契合度非常惊人，特别是名字里的隐形磁场提醒，给了我很多启发！",
    author: "林女士",
    role: "上海 · 企业高管",
    service: "紫微易名测算",
    rating: 5,
  },
  {
    quote: "八字专业排盘的十年大运和流年节点非常清晰，配合 AI 命理大师的多轮提问，帮我在今年换工作的重大节点上做出了清晰决策。",
    author: "张先生",
    role: "深圳 · 互联网创业者",
    service: "八字命盘 & AI命理师",
    rating: 5,
  },
  {
    quote: "刚租了新房，对照三元九运家居风水指南调整了玄关和办公桌的朝向，现在每天在家工作专注度和心情都顺畅了许多。",
    author: "陈小姐",
    role: "新加坡 · 自由设计师",
    service: "家居空间风水",
    rating: 5,
  },
];

export function TrustBar() {
  return (
    <section id="methodology" className="brand-trust-section" aria-labelledby="trust-title">
      {/* Methodology & Authority Pillars */}
      <div className="section-header-center">
        <div className="section-badge">
          <ShieldCheck size={14} />
          <span>AUTHORITY & METHODOLOGY · 学术与技术体系</span>
        </div>
        <h2 id="trust-title">严谨传统易学 · 赋能现代科技</h2>
        <p>不搞封建迷信，用系统化易理与前沿计算技术，为您提供客观的决策参考</p>
      </div>

      <div className="methodology-grid">
        {methodology.map(({ icon: Icon, title, description }) => (
          <div className="methodology-card" key={title}>
            <div className="methodology-card__icon">
              <Icon size={24} strokeWidth={1.8} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>

      {/* User Testimonials / Social Proof */}
      <div className="testimonials-section">
        <div className="testimonials-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>COMMUNITY FEEDBACK · 真实口碑</span>
          </div>
          <h3>来自数万用户的真实体验反馈</h3>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="testimonial-card__top">
                <div className="rating-stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#F5A623" stroke="#F5A623" />
                  ))}
                </div>
                <span className="testimonial-service-tag">{t.service}</span>
              </div>
              <Quote size={20} className="quote-icon" />
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
