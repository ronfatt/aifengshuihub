import type { FengShuiService } from "@/types/service";
import { EmptyState } from "./EmptyState";
import { ServiceCard } from "./ServiceCard";

interface ServiceGridProps {
  services: FengShuiService[];
  onReset: () => void;
  onPreview?: (service: FengShuiService) => void;
}

export function ServiceGrid({ services, onReset, onPreview }: ServiceGridProps) {
  if (services.length === 0) return <EmptyState onReset={onReset} />;

  return (
    <div className="service-grid" aria-live="polite">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={index}
          onPreview={onPreview}
        />
      ))}
    </div>
  );
}
