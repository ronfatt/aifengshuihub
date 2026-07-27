import { ServiceCatalog } from "@/components/ServiceCatalog";
import { services } from "@/data/services";

export default function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Enhance Fengshui Astrology",
    url: "https://enhancefengshui.com/services",
    description: "风水命理服务聚合平台",
    inLanguage: "zh-CN",
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "风水命理服务",
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      description: service.shortDescription,
      url: service.linkType === "external" ? service.targetUrl : `https://enhancefengshui.com${service.targetUrl}`,
    })),
  };

  return (
    <>
      <ServiceCatalog />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
    </>
  );
}
