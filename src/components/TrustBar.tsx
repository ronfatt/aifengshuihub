import { BadgeCheck, LockKeyhole, ShieldCheck, Zap } from "lucide-react";

const features = [
  { icon: BadgeCheck, title: "专业权威", description: "传统智慧 × 现代科技" },
  { icon: LockKeyhole, title: "隐私安全", description: "数据加密，隐私保护" },
  { icon: Zap, title: "快速便捷", description: "智能服务，即开即用" },
  { icon: ShieldCheck, title: "品质保障", description: "严选服务，持续更新" },
];

export function TrustBar() {
  return (
    <section className="trust-bar" aria-label="平台特点">
      {features.map(({ icon: Icon, title, description }) => (
        <div className="trust-bar__item" key={title}>
          <span><Icon size={22} strokeWidth={1.7} aria-hidden="true" /></span>
          <div><h2>{title}</h2><p>{description}</p></div>
        </div>
      ))}
    </section>
  );
}
