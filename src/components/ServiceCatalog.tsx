"use client";

import { useEffect, useMemo, useState } from "react";
import { services } from "@/data/services";
import { trackEvent } from "@/lib/analytics";
import { CategoryFilter } from "./CategoryFilter";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ServiceGrid } from "./ServiceGrid";
import { TrustBar } from "./TrustBar";

export function ServiceCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    trackEvent("page_view", { page: "service_aggregator" });
  }, []);

  const filteredServices = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("zh-CN");
    return services.filter((service) => {
      const categoryMatches = category === "all" || service.category === category;
      if (!categoryMatches) return false;
      if (!normalizedQuery) return true;

      const searchable = [
        service.title,
        service.shortDescription,
        service.category,
        service.categoryLabel,
        service.providerName,
        ...service.tags,
      ].join(" ").toLocaleLowerCase("zh-CN");
      return searchable.includes(normalizedQuery);
    });
  }, [category, query]);

  const updateQuery = (value: string) => {
    setQuery(value);
    trackEvent("search_input", { queryLength: value.length });
  };

  const reset = () => {
    setQuery("");
    setCategory("all");
  };

  return (
    <>
      <Header />
      <main id="top">
        <div className="page-container">
          <Hero search={query} onSearchChange={updateQuery} />
          <section id="services" className="services-section" aria-labelledby="services-title">
            <div className="services-section__heading">
              <div>
                <p className="section-kicker">EXPLORE SERVICES</p>
                <h2 id="services-title">精选服务</h2>
              </div>
              <p><strong>{filteredServices.length}</strong> 项服务</p>
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
          <TrustBar />
        </div>
      </main>
      <Footer />
    </>
  );
}
