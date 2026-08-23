"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { BrandLogo } from "./BrandLogo";

const matrixLinks = [
  { label: "紫微易名 30秒测算", href: "https://ai-name-rust.vercel.app/" },
  { label: "AI 风水命理大师", href: "https://www.enhancefengshui.com/auth" },
  { label: "八字专业排盘", href: "https://www.enhancefengshui.com/auth" },
  { label: "今日流日运势", href: "https://www.enhancefengshui.com/auth" },
  { label: "三元九运家居风水", href: "https://www.enhancefengshui.com/auth" },
  { label: "良辰吉日择选", href: "https://www.enhancefengshui.com/auth" },
];

const brandLinks = [
  { label: "关于 Enhance", href: "#top" },
  { label: "学术体系与方法论", href: "#methodology" },
  { label: "隐私保护协议", href: "#footer" },
  { label: "服务条款与免责", href: "#footer" },
  { label: "生态合作联系", href: "mailto:contact@enhancefengshui.com" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;
    trackEvent("newsletter_subscribe", { emailLength: email.length });
    setSubscribed(true);
  };

  return (
    <footer id="footer" className="site-footer">
      {/* Retention Newsletter / Weekly Fortune Digest Banner */}
      <div className="page-container newsletter-banner">
        <div className="newsletter-banner__copy">
          <div className="section-badge">
            <Mail size={14} />
            <span>WEEKLY VIP DIGEST · 周运精选</span>
          </div>
          <h3>订阅每周吉日与天体运势内参</h3>
          <p>每周一晨间送达，包含本周生肖宜忌、重要黄道吉日与能量开运指南，完全免费。</p>
        </div>

        {subscribed ? (
          <div className="newsletter-success">
            <CheckCircle2 size={20} className="success-icon" />
            <span>已成功订阅！感谢您的信任，周运将准时送达。</span>
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="输入您的常用邮箱地址..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-submit-btn">
              <span>免费订阅</span>
              <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>

      <div className="page-container site-footer__main">
        <div className="site-footer__brand">
          <BrandLogo />
          <p className="brand-mission">
            Enhance Fengshui 致力于将千年中医与易学宇宙观，通过现代 AI 大模型与现代数据科学进行系统化重构，为现代人提供更高效、更具确定性的高维生活决策参考。
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-col">
            <h4>旗下产品矩阵</h4>
            <nav aria-label="旗下产品矩阵">
              {matrixLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-col">
            <h4>品牌与支持</h4>
            <nav aria-label="品牌与支持">
              {brandLinks.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="page-container site-footer__legal">
        <p>
          免责声明：本平台及旗下矩阵工具所提供之命理、风水、运势与姓名分析内容，均基于传统易学典籍考订与算法统计推导，旨在作为个人修身养性、生活规划与空间美化之文化参考，不构成任何医疗、法律或财务投资的确定性承诺。
        </p>
        <div className="legal-bottom-bar">
          <p>© {new Date().getFullYear()} Enhance Fengshui Astrology Matrix. 保留所有权利。</p>
          <div className="legal-tags">
            <span>三元九运</span>
            <span>紫微易名</span>
            <span>子平八字</span>
            <span>AI 大模型驱动</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
