"use client";

import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock,
  Compass,
  ContactRound,
  ExternalLink,
  Eye,
  Heart,
  House,
  Sparkles,
  Star,
  Sun,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";
import { openExternalLink } from "@/lib/externalLink";
import type { FengShuiService } from "@/types/service";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Sun,
  Compass,
  CalendarDays,
  House,
  BriefcaseBusiness,
  Heart,
  ContactRound,
  Sparkles,
  TrendingUp,
  Building2,
};

interface ServiceCardProps {
  service: FengShuiService;
  index: number;
  onPreview?: (service: FengShuiService) => void;
}

export function ServiceCard({ service, index, onPreview }: ServiceCardProps) {
  const router = useRouter();
  const cardRef = useRef<HTMLElement>(null);
  const Icon = iconMap[service.icon] ?? Compass;
  const isComingSoon = service.status === "comingSoon";

  useEffect(() => {
    const card = cardRef.current;
    if (!card || isComingSoon) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        trackEvent("service_card_view", { serviceId: service.id, serviceTitle: service.title });
        observer.disconnect();
      },
      { threshold: 0.3 },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, [isComingSoon, service.id, service.title]);

  const handleDirectLaunch = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (isComingSoon) return;

    const payload = {
      serviceId: service.id,
      serviceTitle: service.title,
      category: service.category,
      providerName: service.providerName,
      providerType: service.providerType,
      linkType: service.linkType,
      targetUrl: service.targetUrl,
    };
    trackEvent("service_card_click", payload);

    if (service.linkType === "external") {
      trackEvent("outbound_link_click", payload);
      openExternalLink(service.targetUrl);
      return;
    }
    router.push(service.targetUrl);
  };

  const handleOpenPreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onPreview) {
      onPreview(service);
    } else {
      handleDirectLaunch();
    }
  };

  return (
    <article
      ref={cardRef}
      className={`service-card ${isComingSoon ? "service-card--coming" : ""} ${
        service.featured ? "service-card--featured" : ""
      }`}
      role="link"
      tabIndex={isComingSoon ? -1 : 0}
      aria-label={`${service.title}：${service.shortDescription}${
        service.linkType === "external" ? "（将在新窗口打开）" : ""
      }`}
      aria-disabled={isComingSoon || undefined}
      onClick={() => {
        if (onPreview) {
          onPreview(service);
        } else {
          handleDirectLaunch();
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          if (onPreview) onPreview(service);
          else handleDirectLaunch();
        }
      }}
      style={
        {
          "--accent": service.accentColor,
          "--accent-rgb": service.accentRgb,
          "--hover-background": service.hoverBackground,
          "--stagger": `${Math.min(index, 7) * 45}ms`,
        } as React.CSSProperties
      }
    >
      {/* Glow Effect */}
      <div className="service-card__glow-bg" />

      {/* Top Meta Bar */}
      <div className="service-card__top">
        <div className="service-card__icon-wrap">
          <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
        </div>
        <div className="service-card__meta-right">
          {service.estimatedTime ? (
            <span className="service-card__time-badge">
              <Clock size={12} />
              <span>{service.estimatedTime}</span>
            </span>
          ) : null}
          <span className="service-card__category-badge">{service.categoryLabel}</span>
        </div>
      </div>

      {/* Badges Row */}
      {service.badges && service.badges.length > 0 ? (
        <div className="service-card__badges-list">
          {service.badges.map((badge, idx) => (
            <span key={idx} className="mini-badge">
              {badge}
            </span>
          ))}
        </div>
      ) : null}

      {/* Content */}
      <div className="service-card__content">
        <div className="service-card__title-row">
          <h3 className="service-card__heading">{service.title}</h3>
          {service.rating ? (
            <span className="service-card__rating">
              <Star size={13} fill="#F5A623" stroke="#F5A623" />
              <span>{service.rating}</span>
            </span>
          ) : null}
        </div>
        <p className="service-card__desc">{service.shortDescription}</p>

        {/* Highlights Bullet List */}
        {service.highlights && service.highlights.length > 0 ? (
          <ul className="service-card__highlights">
            {service.highlights.map((item, idx) => (
              <li key={idx}>
                <CheckCircle2 size={13} className="bullet-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {/* Footer Actions */}
      <div className="service-card__footer">
        <div className="service-card__provider">
          <span className="provider-dot" />
          <span>{service.providerName}</span>
          {service.usageCount ? <span className="usage-tag">{service.usageCount}已测</span> : null}
        </div>

        <div className="service-card__action-row">
          <button
            type="button"
            className="service-card__btn-preview"
            onClick={handleOpenPreview}
            aria-label={`预览 ${service.title} 测算样例`}
          >
            <Eye size={13} />
            <span>看样例</span>
          </button>

          <button
            type="button"
            className="service-card__btn-launch"
            onClick={handleDirectLaunch}
            aria-label={`立即进入 ${service.title}`}
          >
            <span>{service.ctaLabel}</span>
            {service.linkType === "external" ? <ExternalLink size={13} /> : <ArrowUpRight size={14} />}
          </button>
        </div>
      </div>
    </article>
  );
}
