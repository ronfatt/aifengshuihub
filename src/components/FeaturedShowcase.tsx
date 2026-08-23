"use client";

import {
  ArrowRight,
  Compass,
  ExternalLink,
  Eye,
  Sparkles,
  Star,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { openExternalLink } from "@/lib/externalLink";

interface FeaturedShowcaseProps {
  onPreview?: (serviceId: string) => void;
}

export function FeaturedShowcase({ onPreview }: FeaturedShowcaseProps) {
  const handleLaunchName = () => {
    trackEvent("featured_hero_click", {
      serviceId: "name-number",
      serviceTitle: "紫微易名",
      targetUrl: "https://ai-name-rust.vercel.app/",
    });
    openExternalLink("https://ai-name-rust.vercel.app/");
  };

  const handleLaunchBazi = () => {
    trackEvent("featured_hero_click", {
      serviceId: "bazi-chart",
      serviceTitle: "八字专业排盘",
      targetUrl: "https://www.enhancefengshui.com/auth",
    });
    openExternalLink("https://www.enhancefengshui.com/auth");
  };

  return (
    <section className="featured-showcase" aria-labelledby="showcase-title">
      <div className="section-header-center">
        <div className="section-badge">
          <Star size={14} />
          <span>FLAGSHIP SPOTLIGHT · 旗舰主打</span>
        </div>
        <h2 id="showcase-title">矩阵核心王牌 · 极速体验入口</h2>
        <p>深受数万用户好评的标杆工具，即刻开启体验</p>
      </div>

      <div className="showcase-grid">
        {/* Main Flagship 1: 紫微易名 */}
        <div className="showcase-card showcase-card--primary">
          <div className="showcase-card__glow" />
          <div className="showcase-card__badge-row">
            <span className="badge badge--hot">🔥 现象级爆款</span>
            <span className="badge badge--gold">免注册 · 30秒即测</span>
            <span className="badge badge--brand">AI 智能姓名学</span>
          </div>

          <div className="showcase-card__main">
            <div className="showcase-card__icon-header">
              <div className="showcase-card__icon-box">
                <Sparkles size={32} />
              </div>
              <div>
                <h3 className="showcase-card__title">紫微易名</h3>
                <p className="showcase-card__subtitle">AI 融合紫微斗数与三才五格姓名能量</p>
              </div>
            </div>

            <p className="showcase-card__desc">
              名字是跟随人一生的无形能量场。利用高维 AI 模型，30 秒快速透视您的姓名在【名望格局】、【情感姻缘】与【财富运势】三大维度的吉凶分布，并提供能量调理建议。
            </p>

            <div className="showcase-card__preview-box">
              <div className="preview-pill">✨ 名格能量指数分析（94 分）</div>
              <div className="preview-pill">❤️ 姻缘桃花磁场评定（88 分）</div>
              <div className="preview-pill">💰 正偏财运助力评级（96 分）</div>
            </div>

            <div className="showcase-card__meta">
              <div className="meta-stat">
                <strong>4.9 / 5.0</strong>
                <span>⭐ 真实好评率</span>
              </div>
              <div className="meta-stat">
                <strong>68,000+</strong>
                <span>👥 累计测算人次</span>
              </div>
              <div className="meta-stat">
                <strong>0 门槛</strong>
                <span>⚡ 即开即测</span>
              </div>
            </div>

            <div className="showcase-card__cta-row">
              {onPreview ? (
                <button
                  type="button"
                  className="showcase-card__preview-btn"
                  onClick={() => onPreview("name-number")}
                >
                  <Eye size={15} />
                  <span>查看样例</span>
                </button>
              ) : null}

              <button
                type="button"
                className="showcase-card__cta-btn"
                onClick={handleLaunchName}
              >
                <span>立即 30 秒开始测算</span>
                <ExternalLink size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Flagship 2: 八字专业排盘 & AI命理师 */}
        <div className="showcase-card showcase-card--secondary">
          <div className="showcase-card__glow" />
          <div className="showcase-card__badge-row">
            <span className="badge badge--purple">👑 官方专业版</span>
            <span className="badge badge--brand">子平八字 × 大运流年</span>
          </div>

          <div className="showcase-card__main">
            <div className="showcase-card__icon-header">
              <div className="showcase-card__icon-box showcase-card__icon-box--purple">
                <Compass size={32} />
              </div>
              <div>
                <h3 className="showcase-card__title">八字命盘与十年大运</h3>
                <p className="showcase-card__subtitle">真太阳时精确排盘 · 神煞透视</p>
              </div>
            </div>

            <p className="showcase-card__desc">
              深研千年中医历法与子平命理，精准计算天干地支、藏干十神与旺衰五行，全景透视一生大运交接与流年关节点，辅助重要人生抉择。
            </p>

            <div className="showcase-card__preview-box">
              <div className="preview-pill preview-pill--purple">📜 经典四柱八字神煞</div>
              <div className="preview-pill preview-pill--purple">📈 十年大运起伏节点</div>
              <div className="preview-pill preview-pill--purple">💬 配合 AI 命理师答疑</div>
            </div>

            <div className="showcase-card__meta">
              <div className="meta-stat">
                <strong>5.0 满分</strong>
                <span>⭐ 专业推崇</span>
              </div>
              <div className="meta-stat">
                <strong>92,000+</strong>
                <span>👥 命盘解读生成</span>
              </div>
            </div>

            <div className="showcase-card__cta-row">
              {onPreview ? (
                <button
                  type="button"
                  className="showcase-card__preview-btn showcase-card__preview-btn--purple"
                  onClick={() => onPreview("bazi-chart")}
                >
                  <Eye size={15} />
                  <span>查看样例</span>
                </button>
              ) : null}

              <button
                type="button"
                className="showcase-card__cta-btn showcase-card__cta-btn--purple"
                onClick={handleLaunchBazi}
              >
                <span>探索八字大运排盘</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
