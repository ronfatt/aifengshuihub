"use client";

import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  Compass,
  ContactRound,
  ExternalLink,
  Heart,
  House,
  Sun,
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
};

interface ServiceCardProps {
  service: FengShuiService;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
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
      { threshold: 0.5 },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, [isComingSoon, service.id, service.title]);

  const activate = () => {
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

  return (
    <article
      ref={cardRef}
      className={`service-card ${isComingSoon ? "service-card--coming" : ""}`}
      role="link"
      tabIndex={isComingSoon ? -1 : 0}
      aria-label={`${service.title}：${service.shortDescription}${service.linkType === "external" ? "（将在新窗口打开）" : ""}`}
      aria-disabled={isComingSoon || undefined}
      onClick={activate}
      onKeyDown={(event) => {
        if (event.key === "Enter") activate();
      }}
      style={
        {
          "--accent": service.accentColor,
          "--accent-rgb": service.accentRgb,
          "--hover-background": service.hoverBackground,
          "--stagger": `${Math.min(index, 7) * 55}ms`,
        } as React.CSSProperties
      }
    >
      <div className="service-card__top">
        <span className="service-card__icon">
          <Icon size={28} strokeWidth={1.7} aria-hidden="true" />
        </span>
        <span className="service-card__badge">{service.categoryLabel}</span>
      </div>
      <div className="service-card__content">
        <h2>{service.title}</h2>
        <p>{service.shortDescription}</p>
      </div>
      <div className="service-card__cta" aria-hidden="true">
        <span>{service.ctaLabel}</span>
        {service.linkType === "external" ? <ExternalLink size={15} /> : <ArrowUpRight size={16} />}
      </div>
      {service.featured && !isComingSoon ? <span className="service-card__featured">推荐</span> : null}
    </article>
  );
}
