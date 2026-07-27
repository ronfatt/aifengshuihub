"use client";

import { categories } from "@/data/categories";

interface CategoryFilterProps {
  activeCategory: string;
  onChange: (category: string, label: string) => void;
}

export function CategoryFilter({ activeCategory, onChange }: CategoryFilterProps) {
  return (
    <div className="category-filter" role="group" aria-label="按服务分类筛选">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={activeCategory === category.id ? "is-active" : ""}
          aria-pressed={activeCategory === category.id}
          onClick={() => onChange(category.id, category.label)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
