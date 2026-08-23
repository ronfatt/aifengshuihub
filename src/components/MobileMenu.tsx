"use client";

import { X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const navLinks = [
  { label: "矩阵首页", href: "#top" },
  { label: "智能导向", href: "#scenario-wizard" },
  { label: "旗舰王牌", href: "#featured" },
  { label: "全部服务", href: "#services" },
  { label: "每日运势", href: "#daily-widget" },
  { label: "学术体系", href: "#methodology" },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onMemberClick: () => void;
}

export function MobileMenu({ open, onClose, onMemberClick }: MobileMenuProps) {
  return (
    <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} aria-hidden={!open}>
      <button className="mobile-menu__scrim" onClick={onClose} aria-label="关闭菜单" tabIndex={open ? 0 : -1} />
      <aside className="mobile-menu__drawer" role="dialog" aria-modal="true" aria-label="移动导航">
        <div className="mobile-menu__top">
          <BrandLogo />
          <button className="icon-button" onClick={onClose} aria-label="关闭菜单" tabIndex={open ? 0 : -1}>
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="移动端主导航">
          {navLinks.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={index === 0 ? "is-active" : ""}
              aria-current={index === 0 ? "page" : undefined}
              onClick={onClose}
              tabIndex={open ? 0 : -1}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://www.enhancefengshui.com/auth"
            className="mobile-menu__member"
            onClick={(event) => {
              event.preventDefault();
              onMemberClick();
              onClose();
            }}
            tabIndex={open ? 0 : -1}
          >
            会员专属中心
          </a>
        </nav>
      </aside>
    </div>
  );
}
