"use client";

import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock,
  Compass,
  ContactRound,
  ExternalLink,
  Heart,
  HelpCircle,
  House,
  Sparkles,
  Star,
  Sun,
  TrendingUp,
  UserCheck,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect } from "react";
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

interface ServicePreviewModalProps {
  service: FengShuiService | null;
  onClose: () => void;
}

export function ServicePreviewModal({ service, onClose }: ServicePreviewModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (service) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      trackEvent("preview_modal_open", { serviceId: service.id, serviceTitle: service.title });
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, service]);

  if (!service) return null;

  const Icon = iconMap[service.icon] ?? Compass;
  const preview = service.previewData;

  const handleLaunch = () => {
    trackEvent("preview_modal_launch_click", {
      serviceId: service.id,
      serviceTitle: service.title,
      targetUrl: service.targetUrl,
      linkType: service.linkType,
    });

    if (service.linkType === "external") {
      openExternalLink(service.targetUrl);
    } else {
      window.location.assign(service.targetUrl);
    }
    onClose();
  };

  return (
    <div
      className="preview-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="preview-modal-container"
        style={
          {
            "--modal-accent": service.accentColor,
            "--modal-accent-rgb": service.accentRgb,
          } as React.CSSProperties
        }
      >
        {/* Glow backdrop */}
        <div className="preview-modal__glow" />

        {/* Modal Header */}
        <div className="preview-modal__header">
          <div className="preview-modal__header-left">
            <div className="preview-modal__icon-wrap">
              <Icon size={28} strokeWidth={1.8} />
            </div>
            <div>
              <div className="preview-modal__badges">
                <span className="modal-badge modal-badge--category">{service.categoryLabel}</span>
                {service.estimatedTime ? (
                  <span className="modal-badge modal-badge--time">
                    <Clock size={11} />
                    <span>{service.estimatedTime}</span>
                  </span>
                ) : null}
                {service.rating ? (
                  <span className="modal-badge modal-badge--rating">
                    <Star size={11} fill="#F5A623" stroke="#F5A623" />
                    <span>{service.rating} 真实评分</span>
                  </span>
                ) : null}
              </div>
              <h2 id="modal-service-title" className="preview-modal__title">
                {service.title}
              </h2>
            </div>
          </div>

          <button
            type="button"
            className="preview-modal__close-btn"
            onClick={onClose}
            aria-label="关闭预览"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body / Scrollable Content */}
        <div className="preview-modal__body">
          {/* Sample Report Box */}
          {preview ? (
            <>
              <div className="sample-report-card">
                <div className="sample-report__header">
                  <div className="sample-report__tag">
                    <Sparkles size={13} />
                    <span>测算报告样例展示</span>
                  </div>
                  <h3 className="sample-report__title">{preview.sampleReportTitle}</h3>
                  <p className="sample-report__summary">{preview.overviewSummary}</p>
                </div>

                {/* Dimensions Grid */}
                <div className="sample-report__dimensions">
                  {preview.dimensions.map((item, idx) => (
                    <div className="dimension-row" key={idx}>
                      <div className="dimension-row__left">
                        <span className="dimension-name">{item.dimension}</span>
                        {item.score ? <span className="dimension-score">{item.score}</span> : null}
                      </div>
                      <p className="dimension-detail">{item.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Takeaway Box */}
                {preview.sampleTakeaway ? (
                  <div className="sample-report__takeaway">
                    <CheckCircle2 size={16} className="takeaway-icon" />
                    <span>{preview.sampleTakeaway}</span>
                  </div>
                ) : null}
              </div>

              {/* Suitable For & Required Inputs */}
              <div className="preview-info-grid">
                <div className="info-box">
                  <h4>
                    <UserCheck size={16} />
                    <span>适合人群与场景</span>
                  </h4>
                  <ul>
                    {preview.suitableFor.map((text, idx) => (
                      <li key={idx}>
                        <span className="dot" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="info-box">
                  <h4>
                    <Clock size={16} />
                    <span>测算需提供信息</span>
                  </h4>
                  <ul>
                    {preview.requiredInputs.map((text, idx) => (
                      <li key={idx}>
                        <span className="dot dot--cyan" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQ Section */}
              {preview.faq && preview.faq.length > 0 ? (
                <div className="preview-faq-section">
                  <h4>
                    <HelpCircle size={16} />
                    <span>常见疑问解答</span>
                  </h4>
                  <div className="faq-list">
                    {preview.faq.map((item, idx) => (
                      <div className="faq-item" key={idx}>
                        <strong>Q: {item.q}</strong>
                        <p>A: {item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </>
          ) : (
            <div className="preview-fallback">
              <p>{service.shortDescription}</p>
            </div>
          )}
        </div>

        {/* Modal Sticky Footer */}
        <div className="preview-modal__footer">
          <div className="modal-footer-meta">
            <span className="provider-tag">{service.providerName}</span>
            {service.usageCount ? <span className="usage-txt">已有 {service.usageCount} 位用户完成测算</span> : null}
          </div>

          <div className="modal-footer-actions">
            <button type="button" className="modal-btn-cancel" onClick={onClose}>
              返回浏览
            </button>
            <button type="button" className="modal-btn-launch" onClick={handleLaunch}>
              <span>{service.ctaLabel}</span>
              {service.linkType === "external" ? <ExternalLink size={16} /> : <ArrowRight size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
