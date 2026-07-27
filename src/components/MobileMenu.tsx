"use client";

import { X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const links = ["首页", "服务", "工具", "学习", "关于我们"];

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
          {links.map((link, index) => (
            <a
              key={link}
              href={index === 0 ? "#top" : index === 1 ? "#services" : "#footer"}
              className={index === 0 ? "is-active" : ""}
              aria-current={index === 0 ? "page" : undefined}
              onClick={onClose}
              tabIndex={open ? 0 : -1}
            >
              {link}
            </a>
          ))}
          <a
            href="/member"
            className="mobile-menu__member"
            onClick={(event) => {
              event.preventDefault();
              onMemberClick();
              onClose();
            }}
            tabIndex={open ? 0 : -1}
          >
            会员中心
          </a>
        </nav>
      </aside>
    </div>
  );
}
