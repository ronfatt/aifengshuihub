"use client";

import { useEffect, useMemo, useState } from "react";
import { services } from "@/data/services";
import { trackEvent } from "@/lib/analytics";
import { CategoryFilter } from "./CategoryFilter";
import { DailyEnergyWidget } from "./DailyEnergyWidget";
import { FeaturedShowcase } from "./FeaturedShowcase";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ScenarioWizard } from "./ScenarioWizard";
import { ServiceGrid } from "./ServiceGrid";
import { TrustBar } from "./TrustBar";

export function ServiceCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [activeScenario, setActiveScenario] = useState<string | null>(null);

  useEffect(() => {
    trackEvent("page_view", { page: "brand_funnel_hub" });
  }, []);

  const filteredServices = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("zh-CN");

    return services.filter((service) => {
      // 1. Scenario Filter (if active)
      if (activeScenario && (!service.scenarioIds || !service.scenarioIds.includes(activeScenario))) {
        return false;
      }

      // 2. Category Filter
      const categoryMatches = category === "all" || service.category === category;
      if (!categoryMatches) return false;

      // 3. Search Query
      if (!normalizedQuery) return true;

      const searchable = [
        service.title,
        service.shortDescription,
        service.category,
        service.categoryLabel,
        service.providerName,
        ...(service.tags || []),
        ...(service.badges || []),
        ...(service.highlights || []),
      ].join(" ").toLocaleLowerCase("zh-CN");

      return searchable.includes(normalizedQuery);
    });
  }, [activeScenario, category, query]);

  const updateQuery = (value: string) => {
    setQuery(value);
    trackEvent("search_input", { queryLength: value.length });
  };

  const reset = () => {
    setQuery("");
    setCategory("all");
    setActiveScenario(null);
  };

  const handleSelectScenario = (scenarioId: string | null) => {
    setActiveScenario(scenarioId);
    if (scenarioId) {
      // Reset category to all so scenario matches aren't blocked by a narrow category
      setCategory("all");
    }
  };

  return (
    <>
      <Header />
      <main id="top">
        <div className="page-container">
          {/* 1. Hero with Brand Slogan, Search & Matrix Proof Stats */}
          <Hero search={query} onSearchChange={updateQuery} />

          {/* 2. Interactive Decision Funnel (Scenario Wizard) */}
          <div id="scenario-wizard">
            <ScenarioWizard
              activeScenario={activeScenario}
              onSelectScenario={handleSelectScenario}
            />
          </div>

          {/* 3. Flagship Showcase Spotlight (Highlighting Purple/Gold Crown Jewels) */}
          <div id="featured">
            <FeaturedShowcase />
          </div>

          {/* 4. Complete Services Matrix Section */}
          <section id="services" className="services-section" aria-labelledby="services-title">
            <div className="services-section__heading">
              <div>
                <p className="section-kicker">ECOSYSTEM MATRIX</p>
                <h2 id="services-title">全矩阵专业工具展厅</h2>
              </div>
              <div className="services-count-badge">
                <span>共 <strong>{filteredServices.length}</strong> 款专业服务</span>
              </div>
            </div>

            <CategoryFilter
              activeCategory={category}
              onChange={(nextCategory, label) => {
                setCategory(nextCategory);
                trackEvent("category_filter_click", { category: nextCategory, categoryLabel: label });
              }}
            />

            <ServiceGrid services={filteredServices} onReset={reset} />
          </section>

          {/* 5. Daily Interactive Widget (Retention Hook) */}
          <div id="daily-widget">
            <DailyEnergyWidget />
          </div>

          {/* 6. Authority, Methodology & Testimonials */}
          <TrustBar />
        </div>
      </main>
      <Footer />
    </>
  );
}
