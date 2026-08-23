"use client";

import { Bot, Orbit, Sparkles, Star, Users, Zap } from "lucide-react";
import { SearchBar } from "./SearchBar";

interface HeroProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export function Hero({ search, onSearchChange }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__copy">
        <div className="hero__pill-tag">
          <Sparkles size={14} />
          <span>ENHANCE FENGSHUI · 东方命理 × 现代 AI 矩阵</span>
        </div>

        <h1 id="hero-title">
          让千年命理智慧<br />
          <span>成为现代决策的确定性力量</span>
        </h1>

        <p className="hero__description">
          聚合紫微易名、AI 风水大师、八字排盘、流日运势与空间布局。无需繁琐步骤，为您提供一站式专业玄学工具矩阵与高维决策指引。
        </p>

        {/* Search Bar */}
        <SearchBar value={search} onChange={onSearchChange} />

        {/* Matrix Brand Stats */}
        <div className="hero__stats-row">
          <div className="stat-pill">
            <Bot size={16} className="stat-icon" />
            <div>
              <strong>8+</strong>
              <span>专业 AI 工具</span>
            </div>
          </div>
          <div className="stat-pill">
            <Users size={16} className="stat-icon" />
            <div>
              <strong>200,000+</strong>
              <span>累计测算人次</span>
            </div>
          </div>
          <div className="stat-pill">
            <Star size={16} className="stat-icon stat-icon--gold" />
            <div>
              <strong>98.8%</strong>
              <span>真实好评率</span>
            </div>
          </div>
          <div className="stat-pill">
            <Zap size={16} className="stat-icon stat-icon--cyan" />
            <div>
              <strong>秒级</strong>
              <span>深度生成报告</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__art" aria-hidden="true">
        <div className="hero__orbit hero__orbit--one" />
        <div className="hero__orbit hero__orbit--two" />
        <div className="hero__orbit hero__orbit--three" />
        <div className="hero__center-glow" />
        <Orbit size={168} strokeWidth={0.6} />
        <span className="hero__star hero__star--one" />
        <span className="hero__star hero__star--two" />
        <span className="hero__star hero__star--three" />
        <span className="hero__star hero__star--four" />
      </div>
    </section>
  );
}
