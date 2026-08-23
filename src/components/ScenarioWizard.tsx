"use client";

import {
  Building2,
  Compass,
  HeartHandshake,
  Sparkles,
  TrendingUp,
  type LucideIcon,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { scenarios, type Scenario } from "@/data/scenarios";
import { trackEvent } from "@/lib/analytics";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Sparkles,
  HeartHandshake,
  Building2,
  Compass,
};

interface ScenarioWizardProps {
  activeScenario: string | null;
  onSelectScenario: (scenarioId: string | null) => void;
}

export function ScenarioWizard({ activeScenario, onSelectScenario }: ScenarioWizardProps) {
  const handleSelect = (scenario: Scenario) => {
    if (activeScenario === scenario.id) {
      onSelectScenario(null);
      trackEvent("scenario_wizard_deselect", { scenarioId: scenario.id });
    } else {
      onSelectScenario(scenario.id);
      trackEvent("scenario_wizard_select", { scenarioId: scenario.id, title: scenario.title });
      // Smooth scroll to services section
      const target = document.getElementById("services");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="scenario-wizard" aria-labelledby="scenario-title">
      <div className="scenario-wizard__header">
        <div className="section-badge">
          <Sparkles size={14} />
          <span>DECISION FUNNEL · 智能指引</span>
        </div>
        <h2 id="scenario-title">今天你想探索或解决什么？</h2>
        <p className="scenario-wizard__desc">
          点击您当前关心的核心痛点，我们将为您匹配旗下最适合的专业工具与测算入口
        </p>
      </div>

      <div className="scenario-grid">
        {scenarios.map((scenario) => {
          const Icon = iconMap[scenario.icon] ?? Compass;
          const isSelected = activeScenario === scenario.id;

          return (
            <button
              key={scenario.id}
              type="button"
              className={`scenario-card ${isSelected ? "is-selected" : ""}`}
              onClick={() => handleSelect(scenario)}
              style={{
                "--scenario-color": scenario.accentColor,
              } as React.CSSProperties}
            >
              <div className="scenario-card__icon-wrap">
                <Icon size={24} strokeWidth={1.8} />
              </div>
              <div className="scenario-card__content">
                <div className="scenario-card__title-row">
                  <span className="scenario-card__title">{scenario.title}</span>
                  {isSelected ? (
                    <span className="scenario-card__check">
                      <CheckCircle2 size={16} />
                    </span>
                  ) : null}
                </div>
                <p className="scenario-card__subtitle">{scenario.subtitle}</p>
                <div className="scenario-card__footer">
                  <span className="scenario-card__tagline">{scenario.tagline}</span>
                  <span className="scenario-card__cta">
                    {isSelected ? "已锁定推荐" : "去测算"}
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {activeScenario ? (
        <div className="scenario-wizard__active-bar">
          <span>
            已为您高亮匹配与 <strong>{scenarios.find((s) => s.id === activeScenario)?.title}</strong> 相关的工具
          </span>
          <button
            type="button"
            className="scenario-wizard__reset-btn"
            onClick={() => onSelectScenario(null)}
          >
            显示全矩阵工具
          </button>
        </div>
      ) : null}
    </section>
  );
}
