import { ServiceCatalog } from "@/components/ServiceCatalog";
import { services } from "@/data/services";

export default function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "易恒星风水命理",
    url: "https://enhancefengshui.com/services",
    description: "易恒星风水命理：东方命理 × 现代 AI 专业服务矩阵",
    inLanguage: "zh-CN",
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "易恒星风水命理矩阵服务",
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
