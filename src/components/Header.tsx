"use client";

import { Menu, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { BrandLogo } from "./BrandLogo";
import { MobileMenu } from "./MobileMenu";

const navItems = [
  { label: "首页", href: "#top" },
  { label: "服务", href: "#services" },
  { label: "工具", href: "#services" },
  { label: "学习", href: "#footer" },
  { label: "关于我们", href: "#footer" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const handleMemberClick = () => {
    trackEvent("member_center_click", { location: menuOpen ? "mobile_menu" : "header" });
    window.location.assign("/member");
  };

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner page-container">
          <a href="#top" className="site-header__brand" aria-label="Enhance Fengshui 首页">
            <BrandLogo />
          </a>

          <nav className="desktop-nav" aria-label="主导航">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={index === 0 ? "is-active" : ""}
                aria-current={index === 0 ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button className="member-button" onClick={handleMemberClick}>会员中心</button>
            <button className="user-button" onClick={handleMemberClick} aria-label="打开会员中心">
              <UserRound size={19} aria-hidden="true" />
            </button>
          </div>

          <button className="mobile-menu-button" onClick={() => setMenuOpen(true)} aria-label="打开菜单" aria-expanded={menuOpen}>
            <Menu size={24} aria-hidden="true" />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onMemberClick={handleMemberClick} />
    </>
  );
}
