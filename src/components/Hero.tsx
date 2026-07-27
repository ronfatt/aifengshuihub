import { Orbit } from "lucide-react";
import { SearchBar } from "./SearchBar";

interface HeroProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export function Hero({ search, onSearchChange }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="hero__eyebrow"><span /> ENHANCE YOUR PATH</p>
        <h1 id="hero-title">找到适合你的<br /><span>风水命理服务</span></h1>
        <p className="hero__description">聚合风水、八字、运势、择日与家居布局服务，快速找到合适入口。</p>
        <SearchBar value={search} onChange={onSearchChange} />
      </div>
      <div className="hero__art" aria-hidden="true">
        <div className="hero__orbit hero__orbit--one" />
        <div className="hero__orbit hero__orbit--two" />
        <div className="hero__orbit hero__orbit--three" />
        <Orbit size={148} strokeWidth={0.7} />
        <span className="hero__star hero__star--one" />
        <span className="hero__star hero__star--two" />
        <span className="hero__star hero__star--three" />
      </div>
    </section>
  );
}
