import { BrandLogo } from "./BrandLogo";

const footerLinks = ["服务", "关于我们", "隐私政策", "使用条款", "合作伙伴"];

export function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="page-container site-footer__main">
        <div className="site-footer__brand">
          <BrandLogo />
          <p>风水命理服务聚合平台</p>
        </div>
        <nav aria-label="页脚导航">
          {footerLinks.map((link) => <a key={link} href="#services">{link}</a>)}
        </nav>
      </div>
      <div className="page-container site-footer__legal">
        <p>部分服务由第三方平台提供。点击后可能前往外部网站，相关注册、收费、隐私政策及服务内容由对应服务提供方负责。Enhance Fengshui Astrology 提供信息整理与导航服务。</p>
        <p>© {new Date().getFullYear()} Enhance Fengshui Astrology</p>
      </div>
    </footer>
  );
}
